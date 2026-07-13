import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { listCategories, listProcedures } from '@/services/public';

export default function ProcedimentosPage() {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const proceduresQuery = useQuery({ queryKey: ['procedures'], queryFn: listProcedures });
	const categoriesQuery = useQuery({ queryKey: ['categories'], queryFn: listCategories });

	const procedures = useMemo(() => {
		const data = proceduresQuery.data ?? [];
		return data.filter((procedure) => {
			const matchesSearch = `${procedure.name} ${procedure.description}`.toLowerCase().includes(search.toLowerCase());
			const matchesCategory = !category || String(procedure.category_id) === category;
			return matchesSearch && matchesCategory;
		});
	}, [category, proceduresQuery.data, search]);

	return (
		<>
			<Helmet><title>Procedimentos | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>Procedimentos</h1>
				<div className="grid" style={{ gridTemplateColumns: '1fr 220px', marginBottom: '1.5rem' }}>
					<Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar procedimentos" />
					<select value={category} onChange={(event) => setCategory(event.target.value)} style={{ minHeight: 44, borderRadius: 10, border: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
						<option value="">Todas as categorias</option>
						{(categoriesQuery.data ?? []).map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
					</select>
				</div>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
					{procedures.map((procedure) => (
						<Card key={procedure.id}>
							<h3>{procedure.name}</h3>
							<p>{procedure.description}</p>
							<Link to={`/procedimentos/${procedure.slug}`}><Button variant="outline">Abrir</Button></Link>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}
