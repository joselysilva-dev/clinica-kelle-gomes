const faqs = [
  ['Os procedimentos sao personalizados?', 'Sim, cada plano e baseado em avaliacao individual.'],
  ['Existe acompanhamento?', 'Sim, com revisoes e orientacoes ao longo do protocolo.'],
  ['Quais formas de pagamento?', 'Cartao, pix e condicoes especiais para planos.']
];

export function FAQSection() {
  return (
    <section className="container" style={{ padding: '2rem 0' }}>
      <h2>Perguntas Frequentes</h2>
      {faqs.map(([question, answer]) => (
        <details key={question} style={{ marginBottom: '.75rem' }}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}
