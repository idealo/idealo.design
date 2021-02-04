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

async function storeSinglePost({ 
  title = '', 
  date,
  categoryDisplayValue = 'Ohne Kategorie', 
  categorySlug = 'default', 
  slug,
  image = '',
  body
 }) {
  const createdPost = await sql`
    insert into blogposts (
      title,
      categoryDisplayValue,
      categorySlug,
      slug,
      date,
      image,
      text
    ) values (
      ${title},
      ${categoryDisplayValue},
      ${categorySlug},
      ${slug},
      ${date},
      ${image},
      ${body} 
    );`;

  return createdPost;
}

module.exports = {
  fetchList, 
  fetchAllCategories,
  fetchPostsByCategorySlug,
  fetchSinglePost,
  storeSinglePost,
}
