import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';

export default function EquipePage() {
	return (
		<>
			<Helmet><title>Equipe | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Equipe</h1>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
					{['Especialista 01', 'Especialista 02', 'Especialista 03'].map((member) => <Card key={member}><h3>{member}</h3><p>Profissional dedicado a protocolos premium e acompanhamento humanizado.</p></Card>)}
				</div>
			</div>
		</>
	);
}
