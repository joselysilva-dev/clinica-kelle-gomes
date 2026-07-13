import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/Card';
import { listBlogPosts, listCategories, listProcedures, listTestimonials } from '@/services/public';

export default function DashboardPage() {
	const proceduresQuery = useQuery({ queryKey: ['dashboard-procedures'], queryFn: listProcedures });
	const categoriesQuery = useQuery({ queryKey: ['dashboard-categories'], queryFn: listCategories });
	const testimonialsQuery = useQuery({ queryKey: ['dashboard-testimonials'], queryFn: listTestimonials });
	const postsQuery = useQuery({ queryKey: ['dashboard-posts'], queryFn: listBlogPosts });

	return (
		<div className="grid" style={{ gap: '1rem' }}>
			<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
				<Card><strong>{proceduresQuery.data?.length ?? 0}</strong><p>Procedimentos</p></Card>
				<Card><strong>{categoriesQuery.data?.length ?? 0}</strong><p>Categorias</p></Card>
				<Card><strong>{testimonialsQuery.data?.length ?? 0}</strong><p>Depoimentos</p></Card>
				<Card><strong>{postsQuery.data?.length ?? 0}</strong><p>Artigos</p></Card>
			</div>
			<Card><h2>Resumo operacional</h2><p>Painel conectado à API com visão geral dos módulos principais da clínica.</p></Card>
		</div>
	);
}
