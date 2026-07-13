import { CrudPage } from '@/components/shared/CrudPage';

type ContactItem = { id: number; name: string; email: string; message: string };

export default function MessagesAdminPage() {
  return <CrudPage<ContactItem> config={{ title: 'Mensagens', description: 'Leads e mensagens recebidas pelo site.', endpoint: '/contact', fields: [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'E-mail', type: 'email' }, { name: 'message', label: 'Mensagem', type: 'textarea' }], columns: { name: { label: 'Nome', render: (item) => item.name }, email: { label: 'E-mail', render: (item) => item.email }, message: { label: 'Mensagem', render: (item) => item.message } } }} />;
}
