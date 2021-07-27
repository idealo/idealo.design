import fetch from "node-fetch"

const API_BASE = "";

export async function fetchComponents(base_url = API_BASE) {
    const resp = await fetch(`${base_url}/api/components`);
    return await resp.json();
}

export async function fetchTags(base_url = API_BASE) {
    const resp = await fetch(`${base_url}/api/tags`);
    return await resp.json();
}

export async function fetchMap(base_url = API_BASE) {
    const resp = await fetch(`${base_url}/api/map`);
    return await resp.json();
}

export async function fetchReadMe({slug}) {
    const resp = await fetch(`${API_BASE}/api/read/${slug}`);
    return await resp.json();
}

export async function fetchSingleComponent({ slug }) {
  const resp = await fetch(`${API_BASE}/api/components/${slug}`);
  return resp.json();
}

export async function deleteSingleComponent({ component_id }) {
  await fetch(`${API_BASE}/api/components/${component_id}`, {
    method: "DELETE",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
}

export async function updateSingleComponent({ component, component_id }) {
  const body = JSON.stringify(component);

  await fetch(`${API_BASE}/api/components/${component_id}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  });
}