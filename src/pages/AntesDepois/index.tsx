import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { listBeforeAfterItems } from '@/services/public';

export default function AntesDepoisPage() {
	const query = useQuery({ queryKey: ['before-after'], queryFn: listBeforeAfterItems });

	return (
		<>
			<Helmet><title>Antes e Depois | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Antes e Depois</h1>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
					{(query.data ?? []).map((item) => (
						<Card key={item.id}>
							<img src={item.before_image_url} alt="Antes" loading="lazy" />
							<img src={item.after_image_url} alt="Depois" loading="lazy" style={{ marginTop: '.75rem' }} />
						</Card>
					))}
				</div>
			</div>
		</>
	);
}
