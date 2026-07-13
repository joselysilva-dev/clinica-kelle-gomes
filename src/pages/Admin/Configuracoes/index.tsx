import { CrudPage } from '@/components/shared/CrudPage';

type SettingItem = { id: number; key: string; value: string };

export default function SettingsAdminPage() {
  return <CrudPage<SettingItem> config={{ title: 'Configurações', description: 'Parâmetros do sistema e da marca.', endpoint: '/settings', fields: [{ name: 'key', label: 'Chave' }, { name: 'value', label: 'Valor' }], columns: { key: { label: 'Chave', render: (item) => item.key }, value: { label: 'Valor', render: (item) => item.value } } }} />;
}
