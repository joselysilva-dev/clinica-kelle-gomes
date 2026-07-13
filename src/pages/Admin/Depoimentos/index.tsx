import { CrudPage } from '@/components/shared/CrudPage';

type TestimonialItem = { id: number; author_name: string; content: string };

export default function TestimonialsAdminPage() {
  return <CrudPage<TestimonialItem> config={{ title: 'Depoimentos', description: 'Avaliações e vídeos de pacientes.', endpoint: '/testimonials', fields: [{ name: 'author_name', label: 'Autor' }, { name: 'content', label: 'Conteúdo', type: 'textarea' }], columns: { author: { label: 'Autor', render: (item) => item.author_name }, content: { label: 'Conteúdo', render: (item) => item.content } } }} />;
}
