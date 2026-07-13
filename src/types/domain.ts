export type User = { id: string; name: string; email: string; role: 'admin' | 'staff' };
export type Procedure = { id: string; name: string; slug: string; categoryId: string; active: boolean };
export type Category = { id: string; name: string; slug: string };
export type Specialist = { id: string; name: string; title: string };
