const API_BASE = "";

export async function fetchComponents() {
  const resp = await fetch(`${API_BASE}/api/components`);
  return resp.json();
}

export async function fetchTags() {
  const resp = await fetch(`${API_BASE}/api/tags`);
  return resp.json();
}

export async function fetchMap() {
  const resp = await fetch(`${API_BASE}/api/map`);
  return resp.json();
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

export async function fetchScreenshotsOfOneComponent({component_id}){
  const resp = await fetch(`${API_BASE}/api/screenshots/${component_id}`);
  return resp.json();
}

export async function updateSingleComponent({ component, component_id }) {
  const body = JSON.stringify(component);

  await fetch(`${API_BASE}/api/components/${component_id}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  });
}
