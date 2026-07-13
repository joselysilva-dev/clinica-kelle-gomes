import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { CTA } from '@/components/sections/CTA';

const values = ['Excelência', 'Segurança', 'Humanização', 'Evidência científica'];

export default function SobrePage() {
	return (
		<>
			<Helmet>
				<title>Sobre | Clinica Kelle Gomes</title>
				<meta name="description" content="Conheça a história, missão, visão e estrutura da Clínica Kelle Gomes." />
			</Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Sobre a clínica</h1>
				<p>Uma estrutura premium dedicada a protocolos personalizados, segurança e experiência de alto padrão.</p>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '2rem' }}>
					{[
						['História', 'Nascida para unir estética premium, conforto e tecnologia.'],
						['Missão', 'Entregar resultados naturais com acompanhamento individual.'],
						['Visão', 'Ser referência em estética premium e atendimento humanizado.'],
						['Valores', '']
					].map(([title, text]) => (
						<Card key={title}><h3>{title}</h3><p>{text}</p></Card>
					))}
				</div>
				<section style={{ marginTop: '2rem' }}>
					<h2>Valores</h2>
					<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
						{values.map((value) => <Card key={value}>{value}</Card>)}
					</div>
				</section>
			</div>
			<CTA />
		</>
	);
}
