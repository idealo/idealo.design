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

export async function fetchSingleComponent({ slug },base_url = API_BASE) {
  const resp = await fetch(`${base_url}/api/components/${slug}`);
  return resp.json();
}

export async function insertSingleComponent({component}, cb, base_url = API_BASE){
    const body = JSON.stringify(component);

    return await fetch(`${base_url}/api/library`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body,
    }).then(()=> {
        cb();
    });
}

export async function updateSingleComponent({ component }, cb, base_url = API_BASE) {
  const body = JSON.stringify(component);

  const resp = await fetch(`${base_url}/api/library`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body,
  }).then(function (response) {
      cb();
      return response
  });
  return resp;
}

export async function deleteSingleComponent(component, base_url = API_BASE) {
    const body = JSON.stringify(component);
    const resp = await fetch(`${base_url}/api/library/delete`, {
        method: "PUT",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body,
    }).then(function (response) {
        return "successfully deleted blogpost";
    });
    return resp
}