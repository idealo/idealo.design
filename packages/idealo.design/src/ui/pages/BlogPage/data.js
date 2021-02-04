// const API_BASE = 'http://localhost:8080'
const API_BASE = ''

export async function fetchList() {
  const resp = await fetch(`${API_BASE}/api/blogposts`);
  const data = await resp.json();
  return data;
}

export function updateSinglePost({ slug, post }) {
  // const index = data.findIndex((p) => { return p.slug === slug });
  // data[index] = post;

  alert('implement me')
}

export async function fetchSinglePost({ slug }) {
  if (!slug) return null;

  const resp = await fetch(`${API_BASE}/api/blogposts/${slug}`);
  const data = await resp.json();
  return data.pop();
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  if (!categorySlug) return [];

  const resp = await fetch(`${API_BASE}/api/blogposts?byCategorySlug=${categorySlug}`);
  const data = await resp.json();
  return data;
}

export async function fetchAllCategories() {
  const resp = await fetch(`${API_BASE}/api/categories`);
  const data = await resp.json();
  return data;
}
