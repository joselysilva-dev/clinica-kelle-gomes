import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getProcedureBySlug, listProcedures } from '@/services/public';

export default function ProcedimentoDetalhePage() {
	const { slug = '' } = useParams();
	const proceduresQuery = useQuery({ queryKey: ['procedure', slug], queryFn: () => getProcedureBySlug(slug) });
	const relatedQuery = useQuery({ queryKey: ['procedures-related'], queryFn: listProcedures });

	const procedure = proceduresQuery.data;
	const related = useMemo(() => (relatedQuery.data ?? []).filter((item) => item.slug !== slug).slice(0, 3), [relatedQuery.data, slug]);

	if (!procedure) {
		return <div className="container" style={{ padding: '3rem 0' }}><h1>Procedimento não encontrado</h1></div>;
	}

	return (
		<>
			<Helmet><title>{procedure.name} | Clinica Kelle Gomes</title></Helmet>
			<div className="container" style={{ padding: '3rem 0' }}>
				<h1>{procedure.name}</h1>
				<p>{procedure.description}</p>
				<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '2rem' }}>
					<Card><strong>Benefícios</strong><p>Resultados naturais e acompanhados por equipe especializada.</p></Card>
					<Card><strong>Indicações</strong><p>Avaliação individual para definição do melhor protocolo.</p></Card>
					<Card><strong>Tempo</strong><p>Varia de acordo com a técnica e plano terapêutico.</p></Card>
					<Card><strong>Recuperação</strong><p>Orientações personalizadas para conforto e segurança.</p></Card>
				</div>
				<section style={{ marginTop: '2rem' }}>
					<h2>Relacionados</h2>
					<div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
						{related.map((item) => <Card key={item.id}><h3>{item.name}</h3><Link to={`/procedimentos/${item.slug}`}><Button variant="outline">Ver</Button></Link></Card>)}
					</div>
				</section>
			</div>
		</>
	);
}
