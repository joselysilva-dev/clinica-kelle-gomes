import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiClient } from '@/services/api/client';
import { fetchCurrentUser, login as loginRequest, refreshSession } from '@/services/auth';
import type { AuthUser, LoginResponse } from '@/types/auth';

type AuthContextValue = {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  bootstrap: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEYS = {
  accessToken: 'auth_token',
  refreshToken: 'auth_refresh_token'
} as const;

function persistTokens(payload: LoginResponse) {
  localStorage.setItem(STORAGE_KEYS.accessToken, payload.access_token);
  localStorage.setItem(STORAGE_KEYS.refreshToken, payload.refresh_token);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(() => localStorage.getItem(STORAGE_KEYS.accessToken));
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    setAccessToken(null);
    setUser(null);
    delete apiClient.defaults.headers.common.Authorization;
  };

  const bootstrap = async () => {
    const storedAccessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
    if (!storedAccessToken) {
      setIsLoading(false);
      return;
    }

    try {
      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
      setAccessToken(storedAccessToken);
      apiClient.defaults.headers.common.Authorization = `Bearer ${storedAccessToken}`;
    } catch {
      const refreshed = await refreshSession();
      if (!refreshed) {
        logout();
      } else {
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
        setAccessToken(refreshed.access_token);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void bootstrap();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      accessToken,
      isAuthenticated: Boolean(accessToken && user),
      isLoading,
      login: async (email, password) => {
        const response = await loginRequest({ email, password });
        persistTokens(response);
        setAccessToken(response.access_token);
        apiClient.defaults.headers.common.Authorization = `Bearer ${response.access_token}`;
        const currentUser = await fetchCurrentUser();
        setUser(currentUser);
      },
      logout,
      bootstrap
    }),
    [accessToken, bootstrap, isLoading, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used inside AuthProvider');
  }
  return context;
}
