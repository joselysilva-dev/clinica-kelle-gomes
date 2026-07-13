import { MessageCircle } from 'lucide-react';
import { env } from '@/config/env';

export function WhatsAppButton() {
  const href = `https://wa.me/${env.whatsappNumber}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--color-success)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-md)',
        zIndex: 60
      }}
    >
      <MessageCircle />
    </a>
  );
}
