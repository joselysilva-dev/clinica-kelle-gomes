import { CrudPage } from '@/components/shared/CrudPage';

type PatientItem = { id: number; name: string; email: string; phone: string };

export default function PatientsAdminPage() {
  return <CrudPage<PatientItem> config={{ title: 'Pacientes', description: 'Base de pacientes e relacionamento clínico.', endpoint: '/patients', fields: [{ name: 'name', label: 'Nome' }, { name: 'email', label: 'E-mail', type: 'email' }, { name: 'phone', label: 'Telefone' }], columns: { name: { label: 'Nome', render: (item) => item.name }, email: { label: 'E-mail', render: (item) => item.email }, phone: { label: 'Telefone', render: (item) => item.phone } } }} />;
}
