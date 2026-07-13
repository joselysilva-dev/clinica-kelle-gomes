import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { getBlogPostBySlug, listBlogPosts } from '@/services/public';

export default function ArtigoPage() {
	const { slug = '' } = useParams();
	const postQuery = useQuery({ queryKey: ['blog-post', slug], queryFn: () => getBlogPostBySlug(slug) });
	const relatedQuery = useQuery({ queryKey: ['blog-related'], queryFn: listBlogPosts });
	const related = (relatedQuery.data ?? []).filter((item) => item.slug !== slug).slice(0, 3);

	if (!postQuery.data) {
		return <div className="container" style={{ padding: '3rem 0' }}><h1>Artigo não encontrado</h1></div>;
	}

	return (
		<>
			<Helmet><title>{postQuery.data.title} | Blog</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>{postQuery.data.title}</h1>
				<p>{postQuery.data.content}</p>
				<section style={{ marginTop: '2rem' }}>
					<h2>Relacionados</h2>
					<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
						{related.map((item) => <Card key={item.id}><h3>{item.title}</h3><Link to={`/blog/${item.slug}`}>Ler</Link></Card>)}
					</div>
				</section>
			</div>
		</>
	);
}
