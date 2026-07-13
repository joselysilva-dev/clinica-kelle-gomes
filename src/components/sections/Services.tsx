import { Card } from '@/components/ui/Card';

const services = ['Harmonizacao facial', 'Bioestimuladores', 'Laser avancado', 'Protocolos corporais'];

export function Services() {
  return (
    <section className="container" style={{ paddingBottom: '3rem' }}>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {services.map((item) => (
          <Card key={item}>
            <h3>{item}</h3>
            <p>Protocolo personalizado com acompanhamento especializado.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
