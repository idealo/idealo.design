const API_BASE = '';

export async function fetchComponents() {
    const resp = await fetch(`${API_BASE}/api/components`);
    return await resp.json();
}

export async function fetchTags() {
    const resp = await fetch(`${API_BASE}/api/tags`);
    return await resp.json();
}

export async function fetchMap() {
    const resp = await fetch(`${API_BASE}/api/map`);
    return await resp.json();
}

export async function updateComponentsTags(){
    console.log('update Components Tags 😀😀')
    await fetch(`${API_BASE}/api/components/update`,{
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    });
    //return await resp.json();
}