import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { listTestimonials } from '@/services/public';

export default function DepoimentosPage() {
	const query = useQuery({ queryKey: ['testimonials'], queryFn: listTestimonials });

	return (
		<>
			<Helmet><title>Depoimentos | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Depoimentos</h1>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
					{(query.data ?? []).map((item) => <Card key={item.id}><p>{item.content}</p><strong>{item.author_name}</strong></Card>)}
				</div>
			</div>
		</>
	);
}
