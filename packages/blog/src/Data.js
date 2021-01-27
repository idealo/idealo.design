export async function fetchList() {
  const resp = await fetch('http://localhost:8080/api/blogposts');
  const data = await resp.json();
  return data;
}

export async function fetchSinglePost({ slug }) {
  if (!slug) return null;

  const resp = await fetch(`http://localhost:8080/api/blogposts/${slug}`);
  const data = await resp.json();
  return data.pop();
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  if (!categorySlug) return [];

  const resp = await fetch(`http://localhost:8080/api/blogposts?byCategorySlug=${categorySlug}`);
  const data = await resp.json();
  return data;
}

export async function fetchAllCategories() {
  const resp = await fetch(`http://localhost:8080/api/categories`);
  const data = await resp.json();
  return data;
}


