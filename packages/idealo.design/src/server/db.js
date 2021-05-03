import postgres from 'postgres'
const sql = postgres({ database: 'blog', username: 'postgres' })


export async function fetchList() {
   const list = await sql`select * from blogposts ORDER BY blogposts.date DESC`;
   return list;
}

export async function fetchSinglePost({ slug }) {
  const post = await sql`select * from blogposts where slug = ${slug};`
  return post;
}

export async function fetchDistinctCategories(){
    const categories= await sql `select distinct categoryDisplayValue, LOWER(categorySlug) as categoryslug from blogposts`;
    return categories;
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  const list = await sql`select * from blogposts where categoryslug = ${categorySlug} ORDER BY blogposts.date DESC`;
  return list;
}

export async function fetchAllCategories() {
  const cats = await sql`select categoryslug,count(id) as sum  from blogposts group by categoryslug order by sum desc limit 5;`
  return cats;
}

export async function storeSinglePost({
  title = '',
  date,
  categoryDisplayValue = '',
  categorySlug = '',
  slug,
  image = '',
  blogpostcontent
 })
{
    const createdPost = await sql`
    insert into blogposts (
      title,
      categoryDisplayValue,
      categorySlug,
      slug,
      date,
      image,
      blogpostcontent,
      nextpost
    ) values (
      ${title},
      ${categoryDisplayValue},
      ${categorySlug},
      ${slug},
      ${date},
      ${image},
      ${blogpostcontent},
      (select slug from blogposts where date=(select max(date) from blogposts))
    );`;

    const updatePost = await sql `update blogposts set previouspost=${slug} where previouspost is null and slug not in (${slug});`

    return createdPost,updatePost;
}

export async function updateSinglePost(blog) {

    const updatedPost = await sql`
        update blogposts set ${
                sql(blog, 'title', 'categoryDisplayValue', 'categorySlug','blogpostcontent')
        } where
            id = ${ blog.id }`

    return updatedPost;
}

//  export async function deleteSinglePost(blog) {
//  
//  }
