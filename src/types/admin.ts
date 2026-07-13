export type CrudFieldType = 'text' | 'email' | 'number' | 'textarea' | 'datetime-local' | 'select';

export type CrudFieldOption = {
  label: string;
  value: string;
};

export type CrudField = {
  name: string;
  label: string;
  type?: CrudFieldType;
  placeholder?: string;
  options?: CrudFieldOption[];
};

export type CrudColumn<T> = {
  label: string;
  render: (item: T) => string | number | JSX.Element | null;
};

export type CrudConfig<T extends Record<string, unknown>> = {
  title: string;
  description: string;
  endpoint: string;
  fields: CrudField[];
  columns: Record<string, CrudColumn<T>>;
};
