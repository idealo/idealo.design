import fetch from "node-fetch";

const API_BASE = "";

export async function fetchAllBlogposts(base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/blogposts`);
  return resp.json();
}

export async function updateSinglePost(
  { slug, post },
  cb,
  base_url = API_BASE
) {
  const body = JSON.stringify(post);

  const resp = await fetch(`${base_url}/api/blogposts`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  }).then(function (response) {
    cb();
    return response.json();
  });
  return resp
}

export async function insertSinglePost({post}, cb, base_url = API_BASE){
  const body = JSON.stringify(post);

  return await fetch(`${base_url}/api/blogposts`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  }).then(()=> {
    cb();
  });
}

export async function fetchSinglePost({ slug }, base_url = API_BASE) {
  if (!slug) return null;

  const resp = await fetch(`${base_url}/api/blogposts/${slug}`);
  const data = await resp.json();
  return data;
}

export async function fetchPostsByCategorySlug(
  { categorySlug },
  base_url = API_BASE
) {
  if (!categorySlug) return [];

  const resp = await fetch(
    `${base_url}/api/blogposts?byCategorySlug=${categorySlug}`
  );
  return resp.json();
}

export async function fetchAllCategories(base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/categories`);
  return resp.json();
}

export async function fetchPrevSlugAndNextSlugById({id},base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/blogpostPrevSlugAndNextSlug/${id}`);
  return resp.json();
}

export async function fetchUserInfo(base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/me`);
  return resp.json();
}

export async function deleteSinglePost(post, base_url = API_BASE) {
  const body = JSON.stringify(post);
  const resp = await fetch(`${base_url}/api/blogposts/delete`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  }).then(function (response) {
    return "successfully deleted blogpost";
  });
  return resp
}

export async function archiveSinglePost(post, base_url = API_BASE) {
  const body = JSON.stringify(post);
  const resp = await fetch(`${base_url}/api/blogposts/archive`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  }).then(function (response) {
    return response.json();
  });
  return resp
}
