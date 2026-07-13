import { Helmet } from 'react-helmet-async';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';

export default function ContatoPage() {
  return (
    <>
      <Helmet><title>Contato | Clinica Kelle Gomes</title></Helmet>
      <div className="container" style={{ padding: '3rem 0' }}>
        <h1>Contato</h1>
        <div className="grid" style={{ gridTemplateColumns: '1.2fr .8fr', alignItems: 'start' }}>
          <ContactForm />
          <Card>
            <h2>Informações</h2>
            <p>WhatsApp, Instagram, Facebook, telefone, e-mail e horário de atendimento centralizados.</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Email:</strong> contato@clinicakellegomes.com</p>
            <p><strong>Horário:</strong> Seg a Sex, 09h às 19h</p>
          </Card>
        </div>
      </div>
    </>
  );
}
