import { CrudPage } from '@/components/shared/CrudPage';

type UserItem = { id: number; name: string; email: string; is_active: boolean; is_admin: boolean };

export default function UsersAdminPage() {
  return (
    <CrudPage<UserItem>
      config={{
        title: 'Usuários',
        description: 'Controle de acesso, perfis e permissões da clínica.',
        endpoint: '/users',
        fields: [
          { name: 'name', label: 'Nome' },
          { name: 'email', label: 'E-mail', type: 'email' },
          { name: 'password', label: 'Senha', type: 'text', placeholder: 'Digite apenas no cadastro' },
          { name: 'is_active', label: 'Ativo', type: 'select', options: [{ label: 'Sim', value: 'true' }, { label: 'Não', value: 'false' }] },
          { name: 'is_admin', label: 'Administrador', type: 'select', options: [{ label: 'Sim', value: 'true' }, { label: 'Não', value: 'false' }] }
        ],
        columns: {
          name: { label: 'Nome', render: (item) => item.name },
          email: { label: 'E-mail', render: (item) => item.email },
          status: { label: 'Status', render: (item) => (item.is_active ? 'Ativo' : 'Inativo') },
          role: { label: 'Perfil', render: (item) => (item.is_admin ? 'Admin' : 'Equipe') }
        }
      }}
    />
  );
}
