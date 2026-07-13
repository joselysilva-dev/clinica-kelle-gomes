import { useMemo, useState } from 'react';
import type { CrudConfig } from '@/types/admin';
import { useCrudResource } from '@/hooks/useCrudResource';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

function coerceValue(type: string | undefined, value: string) {
  if (type === 'number') {
    return value === '' ? null : Number(value);
  }

  if (type === 'datetime-local') {
    return value ? new Date(value).toISOString() : null;
  }

  return value;
}

export function CrudPage<TItem extends { id: number; [key: string]: unknown }>({ config }: { config: CrudConfig<TItem> }) {
  const { items, isLoading, createItem, updateItem, deleteItem, isSaving } = useCrudResource<TItem, Record<string, unknown>>(config.endpoint);
  const [search, setSearch] = useState('');
  const [editingItem, setEditingItem] = useState<TItem | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const visibleItems = useMemo(() => {
    if (!search) return items;
    const normalized = search.toLowerCase();
    return items.filter((item) =>
      Object.values(item).some((value) => String(value ?? '').toLowerCase().includes(normalized))
    );
  }, [items, search]);

  const startCreate = () => {
    setEditingItem(null);
    setFormData({});
  };

  const startEdit = (item: TItem) => {
    setEditingItem(item);
    const nextForm: Record<string, string> = {};
    config.fields.forEach((field) => {
      nextForm[field.name] = String(item[field.name] ?? '');
    });
    setFormData(nextForm);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = Object.fromEntries(
      config.fields.map((field) => [field.name, coerceValue(field.type, formData[field.name] ?? '')])
    );

    if (editingItem) {
      await updateItem({ id: editingItem.id, payload });
    } else {
      await createItem(payload);
    }

    startCreate();
  };

  return (
    <section className="grid" style={{ gap: '1.25rem' }}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ marginTop: 0 }}>{config.title}</h2>
            <p>{config.description}</p>
          </div>
          <Button type="button" onClick={startCreate}>Novo registro</Button>
        </div>
      </Card>

      <Card>
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={`Pesquisar em ${config.title.toLowerCase()}`}
        />
      </Card>

      <Card>
        <form onSubmit={handleSubmit} className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {config.fields.map((field) => {
            const value = formData[field.name] ?? '';
            return (
              <label key={field.name} style={{ display: 'grid', gap: '.4rem' }}>
                <span>{field.label}</span>
                {field.type === 'textarea' ? (
                  <Textarea value={value} onChange={(event) => setFormData((current) => ({ ...current, [field.name]: event.target.value }))} />
                ) : field.type === 'select' ? (
                  <select value={value} onChange={(event) => setFormData((current) => ({ ...current, [field.name]: event.target.value }))} style={{ minHeight: 44, borderRadius: 10, border: '1px solid var(--color-border)', background: 'var(--color-surface)', padding: '0.6rem 0.8rem' }}>
                    <option value="">Selecione</option>
                    {field.options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                ) : (
                  <Input
                    type={field.type ?? 'text'}
                    value={value}
                    placeholder={field.placeholder}
                    onChange={(event) => setFormData((current) => ({ ...current, [field.name]: event.target.value }))}
                  />
                )}
              </label>
            );
          })}
          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '.75rem' }}>
            <Button type="submit" disabled={isSaving}>{editingItem ? 'Atualizar' : 'Salvar'}</Button>
            <Button type="button" variant="outline" onClick={startCreate}>Limpar</Button>
          </div>
        </form>
      </Card>

      <Card>
        {isLoading ? (
          <p>Carregando registros...</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th align="left">ID</th>
                  {Object.values(config.columns).map((column) => <th key={column.label} align="left">{column.label}</th>)}
                  <th align="left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {visibleItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    {Object.values(config.columns).map((column) => <td key={column.label}>{column.render(item)}</td>)}
                    <td>
                      <div style={{ display: 'flex', gap: '.5rem' }}>
                        <Button type="button" variant="outline" onClick={() => startEdit(item)}>Editar</Button>
                        <Button type="button" onClick={async () => deleteItem(item.id)}>Excluir</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </section>
  );
}
