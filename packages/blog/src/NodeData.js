const postgres = require('postgres')
const sql = postgres({ database: 'blog', username: 'postgres' })


async function fetchList() {
   const list = await sql`select * from blogposts`;
   return list;
}

async function fetchSinglePost({ slug }) {
  const post = await sql`select * from blogposts where slug = ${slug};`
  return post;
}

async function fetchPostsByCategorySlug({ categorySlug }) {
  const list = await sql`select * from blogposts where categoryslug = ${categorySlug};`
  return list;
}

async function fetchAllCategories() {
  const cats = await sql`select categoryslug,count(id) as sum  from blogposts group by categoryslug order by sum desc limit 5;`
  return cats;
}

module.exports = {
  fetchList, 
  fetchAllCategories,
  fetchPostsByCategorySlug,
  fetchSinglePost,
}
