import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { listGalleryItems } from '@/services/public';

export default function GaleriaPage() {
	const [search, setSearch] = useState('');
	const galleryQuery = useQuery({ queryKey: ['gallery'], queryFn: listGalleryItems });
	const items = useMemo(() => (galleryQuery.data ?? []).filter((item) => `${item.title} ${item.image_url}`.toLowerCase().includes(search.toLowerCase())), [galleryQuery.data, search]);

	return (
		<>
			<Helmet><title>Galeria | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Galeria</h1>
				<Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar imagens" />
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '1.5rem' }}>
					{items.map((item) => <Card key={item.id}><img src={item.image_url} alt={item.title} loading="lazy" /><h3>{item.title}</h3></Card>)}
				</div>
			</div>
		</>
	);
}
