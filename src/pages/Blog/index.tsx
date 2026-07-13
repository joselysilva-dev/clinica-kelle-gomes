import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { listBlogPosts } from '@/services/public';
import { useMemo, useState } from 'react';

export default function BlogPage() {
	const [search, setSearch] = useState('');
	const query = useQuery({ queryKey: ['blog'], queryFn: listBlogPosts });
	const posts = useMemo(() => (query.data ?? []).filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(search.toLowerCase())), [query.data, search]);

	return (
		<>
			<Helmet><title>Blog | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Blog</h1>
				<Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar artigos" />
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: '1.5rem' }}>
					{posts.map((post) => <Card key={post.id}><h3>{post.title}</h3><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>Ler</Link></Card>)}
				</div>
			</div>
		</>
	);
}
