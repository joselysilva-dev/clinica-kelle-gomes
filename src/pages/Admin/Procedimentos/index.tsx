import { CrudPage } from '@/components/shared/CrudPage';

type ProcedureItem = { id: number; name: string; slug: string; description: string; category_id: number };

export default function ProceduresAdminPage() {
  return <CrudPage<ProcedureItem> config={{ title: 'Procedimentos', description: 'Gestão de tratamentos e protocolos.', endpoint: '/procedures', fields: [{ name: 'name', label: 'Nome' }, { name: 'slug', label: 'Slug' }, { name: 'description', label: 'Descrição', type: 'textarea' }, { name: 'category_id', label: 'Categoria ID', type: 'number' }], columns: { name: { label: 'Nome', render: (item) => item.name }, slug: { label: 'Slug', render: (item) => item.slug }, category: { label: 'Categoria', render: (item) => item.category_id } } }} />;
}
