const API_BASE = '';

export async function fetchComponents() {
    const resp = await fetch(`${API_BASE}/api/components`);
    return await resp.json();
}

export async function fetchTags() {
    const resp = await fetch(`${API_BASE}/api/tags`);
    return await resp.json();
}