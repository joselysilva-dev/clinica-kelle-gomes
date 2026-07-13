import { useState, type ChangeEvent } from 'react';
import { apiClient } from '@/services/api/client';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function UploadsAdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    const response = await apiClient.post('/uploads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    setResult(response.data.path);
  };

  return (
    <Card>
      <h2>Uploads</h2>
      <input type="file" onChange={(event: ChangeEvent<HTMLInputElement>) => setFile(event.target.files?.[0] ?? null)} />
      <Button type="button" onClick={handleUpload}>Enviar arquivo</Button>
      {result ? <p>Arquivo salvo em: {result}</p> : null}
    </Card>
  );
}
