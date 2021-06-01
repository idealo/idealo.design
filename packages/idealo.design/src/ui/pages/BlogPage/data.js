import fetch from "node-fetch"

// const API_BASE = 'http://localhost:8080';
const API_BASE = '';

export async function fetchList(base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/blogposts`);
  const data = await resp.json();
  return data;
}

export async function updateSinglePost( base_url = API_BASE,slug, post , cb) {
  const body = JSON.stringify(post);

  const resp = await fetch(`${base_url}/api/blogposts`, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body
      }
  ).then(function(response) {
      cb();
    return response.json();
  });

}

export async function fetchSinglePost({ slug }, base_url = API_BASE) {
  if (!slug) return null;

  const resp = await fetch(`${base_url}/api/blogposts/${slug}`);
  const data = await resp.json();
  return data.pop();
}

export async function fetchPostsByCategorySlug({ categorySlug }, base_url = API_BASE) {
  if (!categorySlug) return [];

  const resp = await fetch(`${base_url}/api/blogposts?byCategorySlug=${categorySlug}`);
  const data = await resp.json();
  return data;
}

export async function fetchAllCategories(base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/categories`);
  const data = await resp.json();
  return data;
}

export async function fetchDistinctCategories(base_url = API_BASE) {
    const resp = await fetch(`${base_url}/api/distinctCategories`);
    const data = await resp.json();
    return data;
}

export async function fetchUserInfo(base_url = API_BASE) {
  const resp = await fetch( `${base_url}/api/me` );
  const data = await resp.json();

  return data;
}

export async function deleteSinglePost(post, base_url = API_BASE) {
    const body = JSON.stringify(post);

    await fetch(`${base_url}/api/blogposts/delete`, {
        method: 'DELETE',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body
    })
    return post
}

export async function archiveSinglePost(post,base_url = API_BASE) {
    const body = JSON.stringify(post);

    const response=await fetch(`${base_url}/api/blogposts/archive`,{
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body
    });

    const data = await response.json()

    console.log('blablabla archivieren response',data)
    return data;
}