// const API_BASE = 'http://localhost:8080';
const API_BASE = '';

export async function fetchList() {
    const resp = await fetch(`${API_BASE}/api/blogposts`);
    const data = await resp.json();
    return data;
}

export async function updateSinglePost({slug, post}, cb) {
    const body = JSON.stringify(post);

    const resp = await fetch(`${API_BASE}/api/blogposts`, {
            method: 'PUT',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body
        }
    ).then(function (response) {
        cb();
        return response.json();
    });

}

export async function fetchSinglePost({slug}) {
    if (!slug) return null;

    const resp = await fetch(`${API_BASE}/api/blogposts/${slug}`);
    const data = await resp.json();
    return data.pop();
}

export async function fetchPostsByCategorySlug({categorySlug}) {
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

export async function fetchAllTitles() {
    const resp = await fetch(`${API_BASE}/api/title`);
    const data = await resp.json();
    return data;
}

export async function fetchDistinctCategories() {
    const resp = await fetch(`${API_BASE}/api/distinctCategories`);
    const data = await resp.json();
    return data;
}

export async function fetchUserInfo() {
    const resp = await fetch(`${API_BASE}/api/me`);
    const data = await resp.json();

    return data;
}

export async function deleteSinglePost(post) {
    const body = JSON.stringify(post);

    await fetch(`${API_BASE}/api/blogposts/delete`, {
        method: 'DELETE',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body
    })
}

export async function archiveSinglePost(post) {
    const body = JSON.stringify(post);

    await fetch(`${API_BASE}/api/blogposts/archive`, {
        method: 'PUT',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body
    });
}