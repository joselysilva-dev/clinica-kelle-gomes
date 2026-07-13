import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/Input';

const faqItems = [
	['Os procedimentos são personalizados?', 'Sim, cada protocolo é adaptado à avaliação individual.'],
	['Existe acompanhamento?', 'Sim, com orientações pré e pós procedimento.'],
	['Como funciona o agendamento?', 'Você pode solicitar contato pelo formulário ou WhatsApp.']
];

export default function FAQPage() {
	const [search, setSearch] = useState('');
	const filtered = useMemo(() => faqItems.filter(([question]) => question.toLowerCase().includes(search.toLowerCase())), [search]);

	return (
		<>
			<Helmet><title>FAQ | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Perguntas Frequentes</h1>
				<Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar pergunta" />
				{filtered.map(([question, answer]) => <details key={question} style={{ marginTop: '1rem' }}><summary>{question}</summary><p>{answer}</p></details>)}
			</div>
		</>
	);
}
