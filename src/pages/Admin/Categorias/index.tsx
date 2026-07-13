import { CrudPage } from '@/components/shared/CrudPage';

type CategoryItem = { id: number; name: string; slug: string };

export default function CategoriesAdminPage() {
  return <CrudPage<CategoryItem> config={{ title: 'Categorias', description: 'Agrupe procedimentos por especialidade.', endpoint: '/categories', fields: [{ name: 'name', label: 'Nome' }, { name: 'slug', label: 'Slug' }], columns: { name: { label: 'Nome', render: (item) => item.name }, slug: { label: 'Slug', render: (item) => item.slug } } }} />;
}
