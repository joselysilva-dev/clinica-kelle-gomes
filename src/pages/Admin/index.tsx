import { Card } from '@/components/ui/Card';

export default function AdminHomePage() {
	return (
		<div className="grid" style={{ gap: '1rem' }}>
			<Card>
				<h2>Painel administrativo</h2>
				<p>Use a navegação lateral para gerenciar usuários, conteúdo, agendamentos e configurações.</p>
			</Card>
		</div>
	);
}
