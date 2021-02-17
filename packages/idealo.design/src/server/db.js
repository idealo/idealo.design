import postgres from 'postgres'
const sql = postgres({ database: 'blog', username: 'postgres' })


export async function fetchList() {
   const list = await sql`select * from blogposts ORDER BY date DESC`;
   return list;
}

export async function fetchSinglePost({ slug }) {
  const post = await sql`select * from blogposts where slug = ${slug};`
  return post;
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  const list = await sql`select * from blogposts where categoryslug = ${categorySlug} ORDER BY date DESC`;
  return list;
}

export async function fetchAllCategories() {
  const cats = await sql`select categoryslug,count(id) as sum  from blogposts group by categoryslug order by sum desc limit 5;`
  return cats;
}

export async function storeSinglePost({
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

export async function updateSinglePost(blog) {
  const updatedPost = await sql`
    update blogposts set ${
      sql(blog, 'text', 'title' )
  } where 
    id = ${ blog.id }
`     
  return updatedPost;
 }

//  export async function deleteSinglePost(blog) {
//  
//  }