import postgres from 'postgres'
// const sql = postgres({ database: 'blog', username: 'postgres' })
const  POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://postgres@localhost:5432/blog'
const sql = postgres(POSTGRES_URL)

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

export async function fetchAllTitles() {
    const titles = await sql`select title from blogposts;`
    return titles;
}

export async function fetchComponents() {
    const components = await sql`select title from components;`
    return components;
}

export async function fetchTags() {
    const tags = await sql`select tag_name from tags;`
    return tags;
}

export async function fetchMap(){
    const fin = await sql `select ct.component_id, c.title, t.tag_name from components_tags_map as ct, components as c, tags as t where ct.tag_id = t.tag_id and c.component_id = ct.component_id;`
    return fin;
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
    const [storeSinglePostTransaction] = await sql.begin(async sql => {
        const createPost = await sql`
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
        );`

        const updatePost = await sql `
        update blogposts
        set previouspost=${slug}
        where isArchived = 0 and date= (select max(date) from blogposts where isArchived= 0 and date<(select max(date) from blogposts))
        and slug not in (${slug});`

        return [createPost, updatePost];
    })
    return [storeSinglePostTransaction]
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
        const [deleteTransaction] = await sql.begin(async sql => {
            const [toBeDeletedBlogpost] = await sql `select * from blogposts where id=${blog.id}`

            let deletedBlogpost;
            let updateNextDatabase;
            let updatePreviousDatabase;

            if(toBeDeletedBlogpost.previouspost == null){
                updatePreviousDatabase=await sql `update blogposts set previouspost = null where previouspost = ${toBeDeletedBlogpost.slug}`
                deletedBlogpost=await sql `delete from blogposts where id = ${toBeDeletedBlogpost.id}`
            }

            else if(toBeDeletedBlogpost.nextpost == null){
                updateNextDatabase=await sql `update blogposts set nextpost = null where nextpost = ${toBeDeletedBlogpost.slug}`
                deletedBlogpost=await sql `delete from blogposts where id = ${toBeDeletedBlogpost.id}`
            }

            else if (toBeDeletedBlogpost.nextpost && toBeDeletedBlogpost.previouspost){
                updatePreviousDatabase = await sql `
                    update blogposts 
                    set previouspost = ${toBeDeletedBlogpost.previouspost} 
                    where previouspost = ${toBeDeletedBlogpost.slug}`
                updateNextDatabase = await sql `
                    update blogposts 
                    set nextpost = ${toBeDeletedBlogpost.nextpost} 
                    where nextpost = ${toBeDeletedBlogpost.slug}`
                deletedBlogpost=await sql `delete from blogposts where id = ${toBeDeletedBlogpost.id}`
            }
            else {
                deletedBlogpost=await sql `delete from blogposts where id = ${toBeDeletedBlogpost.id}`
            }

            return [deletedBlogpost, updateNextDatabase, updatePreviousDatabase];
        })
        return [deleteTransaction]
}

export async function archiveSinglePost(blog) {
    const [archiveTransaction] = await sql.begin(async sql => {
        const [toBeArchivedBlogpost] = await sql `select * from blogposts where id=${blog.id}`

        let archivedBlogpost;
        let updateNextDatabase;
        let updatePreviousDatabase;

        if(toBeArchivedBlogpost.previouspost == null){
            updatePreviousDatabase=await sql `update blogposts set previouspost = null where previouspost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost=await sql `update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        }

        else if(toBeArchivedBlogpost.nextpost == null){
            updateNextDatabase=await sql `update blogposts set nextpost = null where nextpost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost=await sql `update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        }

        else if (toBeArchivedBlogpost.nextpost && toBeArchivedBlogpost.previouspost){
            updatePreviousDatabase = await sql `
                    update blogposts 
                    set previouspost = ${toBeArchivedBlogpost.previouspost} 
                    where previouspost = ${toBeArchivedBlogpost.slug}`
            updateNextDatabase = await sql `
                    update blogposts 
                    set nextpost = ${toBeArchivedBlogpost.nextpost} 
                    where nextpost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost=await sql `update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        }
        else {
            archivedBlogpost=await sql `update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        }

        return [archivedBlogpost, updateNextDatabase, updatePreviousDatabase];
    })
    return [archiveTransaction]
}
