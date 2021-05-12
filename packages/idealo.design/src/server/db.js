import postgres from 'postgres'
const sql = postgres({ database: 'blog', username: 'postgres' })


export async function fetchList() {
   const list = await sql`select * from blogposts where isArchived = 0 ORDER BY blogposts.date DESC`;
   return list;
}

export async function fetchSinglePost({ slug }) {
  const post = await sql`select * from blogposts where slug = ${slug};`
  return post;
}

export async function fetchDistinctCategories(){
    const categories= await sql `select distinct categoryDisplayValue, LOWER(categorySlug) as categoryslug from blogposts where isArchived = 0`;
    return categories;
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  const list = await sql`select * from blogposts where categoryslug = ${categorySlug} AND isArchived = 0 ORDER BY blogposts.date DESC`;
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
  blogpostcontent,
  isArchived = 0
 }) {
  const createdPost = await sql`
    insert into blogposts (
      title,
      categoryDisplayValue,
      categorySlug,
      slug,
      date,
      image,
      blogpostcontent,
      nextpost,
      isArchived
    ) values (
      ${title},
      ${categoryDisplayValue},
      ${categorySlug},
      ${slug},
      ${date},
      ${image},
      ${blogpostcontent},
      (select slug from blogposts where isArchived = 0 and date=(select max(date) from blogposts where isArchived= 0)),
      ${isArchived}
    );`;

    const updatePost = await sql `
        update blogposts
        set previouspost=${slug}
        where isArchived = 0 and date= (select max(date) from blogposts where isArchived= 0 and date<(select max(date) from blogposts))
        and slug not in (${slug});`

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

export async function deleteSinglePost(blog) {
    await sql `delete from blogposts where slug = ${blog.slug}`;
    await handleNextPreviousPost(blog);
}

async function handleNextPreviousPost(blog){
    if(blog.previouspost == null){

        await sql `update blogposts set previouspost = null where previouspost = ${blog.slug}`
        await sql `update blogposts set nextpost = ${blog.nextpost} where nextpost = ${blog.slug}`
    }
    else if (blog.nextpost == null){
        await sql `update blogposts set previouspost = ${blog.previouspost} where previouspost = ${blog.slug}`
        await sql `update blogposts set nextpost = null where nextpost = ${blog.slug}`

    }else{
        await sql `update blogposts set previouspost = ${blog.previouspost} where previouspost = ${blog.slug}`
        await sql `update blogposts set nextpost = ${blog.nextpost} where nextpost = ${blog.slug}`
    }
}

export async function archiveSinglePost(blog) {
    await sql `update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
    await handleNextPreviousPost(blog)
}
