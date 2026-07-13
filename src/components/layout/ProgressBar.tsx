import { useEffect, useState } from 'react';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (window.scrollY / height) * 100 : 0;
      setProgress(value);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width: `${progress}%`,
        background: 'var(--color-primary)',
        zIndex: 60,
        transition: 'width 120ms linear'
      }}
    />
  );
}
