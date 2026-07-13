import { CrudPage } from '@/components/shared/CrudPage';

type GalleryItem = { id: number; title: string; image_url: string };

export default function GalleryAdminPage() {
  return <CrudPage<GalleryItem> config={{ title: 'Galeria', description: 'Imagens da clínica, resultados e estrutura.', endpoint: '/gallery', fields: [{ name: 'title', label: 'Título' }, { name: 'image_url', label: 'URL da imagem' }], columns: { title: { label: 'Título', render: (item) => item.title }, image: { label: 'Imagem', render: (item) => item.image_url } } }} />;
}
