export type AuthUser = {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  token_type: 'bearer';
};
