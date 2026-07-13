import { CrudPage } from '@/components/shared/CrudPage';

type BlogItem = { id: number; title: string; slug: string; excerpt: string; content: string };

export default function BlogAdminPage() {
  return <CrudPage<BlogItem> config={{ title: 'Blog', description: 'Artigos, SEO e conteúdo editorial.', endpoint: '/blog', fields: [{ name: 'title', label: 'Título' }, { name: 'slug', label: 'Slug' }, { name: 'excerpt', label: 'Resumo', type: 'textarea' }, { name: 'content', label: 'Conteúdo', type: 'textarea' }], columns: { title: { label: 'Título', render: (item) => item.title }, slug: { label: 'Slug', render: (item) => item.slug } } }} />;
}
