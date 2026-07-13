import { CrudPage } from '@/components/shared/CrudPage';

type AppointmentItem = { id: number; patient_id: number; specialist_id: number; procedure_id: number; starts_at: string; status: string };

export default function AgendaAdminPage() {
  return <CrudPage<AppointmentItem> config={{ title: 'Agenda', description: 'Agendamentos, horários e status.', endpoint: '/appointments', fields: [{ name: 'patient_id', label: 'Paciente ID', type: 'number' }, { name: 'specialist_id', label: 'Especialista ID', type: 'number' }, { name: 'procedure_id', label: 'Procedimento ID', type: 'number' }, { name: 'starts_at', label: 'Início', type: 'datetime-local' }, { name: 'status', label: 'Status' }], columns: { patient: { label: 'Paciente', render: (item) => item.patient_id }, procedure: { label: 'Procedimento', render: (item) => item.procedure_id }, starts: { label: 'Início', render: (item) => item.starts_at }, status: { label: 'Status', render: (item) => item.status } } }} />;
}
