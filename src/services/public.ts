import { apiClient } from '@/services/api/client';

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type NewsletterPayload = {
  email: string;
};

export async function sendContact(payload: ContactPayload) {
  const response = await apiClient.post('/contact', payload);
  return response.data;
}

export async function subscribeNewsletter(payload: NewsletterPayload) {
  const response = await apiClient.post('/newsletter', payload);
  return response.data;
}

export async function listProcedures() {
  const response = await apiClient.get('/procedures');
  return response.data as Array<{ id: number; name: string; slug: string; description: string; category_id: number }>;
}

export async function getProcedureBySlug(slug: string) {
  const procedures = await listProcedures();
  return procedures.find((procedure) => procedure.slug === slug) ?? null;
}

export async function listTestimonials() {
  const response = await apiClient.get('/testimonials');
  return response.data as Array<{ id: number; author_name: string; content: string }>;
}

export async function listBlogPosts() {
  const response = await apiClient.get('/blog');
  return response.data as Array<{ id: number; title: string; slug: string; excerpt: string; content: string }>;
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await listBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function listGalleryItems() {
  const response = await apiClient.get('/gallery');
  return response.data as Array<{ id: number; title: string; image_url: string }>;
}

export async function listBeforeAfterItems() {
  const response = await apiClient.get('/before-after');
  return response.data as Array<{ id: number; before_image_url: string; after_image_url: string; procedure_id: number }>;
}

export async function listCategories() {
  const response = await apiClient.get('/categories');
  return response.data as Array<{ id: number; name: string; slug: string }>;
}
