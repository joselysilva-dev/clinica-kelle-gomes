import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="container" style={{ padding: '2rem', margin: '2rem auto', background: 'var(--color-surface)', borderRadius: 20, border: '1px solid var(--color-border)' }}>
      <h3>Pronta para transformar sua experiencia de autocuidado?</h3>
      <p>Fale com nosso time e receba orientacao personalizada.</p>
      <Button>Quero meu plano</Button>
    </section>
  );
}
