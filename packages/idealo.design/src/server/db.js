import postgres from 'postgres'
import {components} from './mockMotifImport/saveImportedComponents'
// const sql = postgres({ database: 'blog', username: 'postgres' })
const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://postgres@localhost:5432/blog'
const sql = postgres(POSTGRES_URL)

/*blog page*/
export async function fetchList() {
    const list = await sql`select * from blogposts where isArchived = 0 ORDER BY blogposts.date DESC`;
    return list;
}

export async function fetchSinglePost({slug}) {
    const post = await sql`select * from blogposts where slug = ${slug};`
    return post;
}

export async function fetchDistinctCategories() {
    const categories = await sql`select distinct categoryDisplayValue, LOWER(categorySlug) as categoryslug from blogposts where isArchived = 0`;
    return categories;
}

export async function fetchPostsByCategorySlug({categorySlug}) {
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

        const updatePost = await sql`
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
        sql(blog, 'title', 'categoryDisplayValue', 'categorySlug', 'blogpostcontent')
    } where
            id = ${blog.id}`

    return updatedPost;
}

export async function deleteSinglePost(blog) {
    const [deleteTransaction] = await sql.begin(async sql => {
        const [toBeDeletedBlogpost] = await sql`select * from blogposts where id=${blog.id}`

        let deletedBlogpost;
        let updateNextDatabase;
        let updatePreviousDatabase;

        if (toBeDeletedBlogpost.previouspost == null) {
            updatePreviousDatabase = await sql`update blogposts set previouspost = null where previouspost = ${toBeDeletedBlogpost.slug}`
            deletedBlogpost = await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`
        } else if (toBeDeletedBlogpost.nextpost == null) {
            updateNextDatabase = await sql`update blogposts set nextpost = null where nextpost = ${toBeDeletedBlogpost.slug}`
            deletedBlogpost = await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`
        } else if (toBeDeletedBlogpost.nextpost && toBeDeletedBlogpost.previouspost) {
            updatePreviousDatabase = await sql`
                    update blogposts 
                    set previouspost = ${toBeDeletedBlogpost.previouspost} 
                    where previouspost = ${toBeDeletedBlogpost.slug}`
            updateNextDatabase = await sql`
                    update blogposts 
                    set nextpost = ${toBeDeletedBlogpost.nextpost} 
                    where nextpost = ${toBeDeletedBlogpost.slug}`
            deletedBlogpost = await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`
        } else {
            deletedBlogpost = await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`
        }

        return [deletedBlogpost, updateNextDatabase, updatePreviousDatabase];
    })
    return [deleteTransaction]
}

export async function archiveSinglePost(blog) {
    const [archiveTransaction] = await sql.begin(async sql => {
        const [toBeArchivedBlogpost] = await sql`select * from blogposts where id=${blog.id}`

        let archivedBlogpost;
        let updateNextDatabase;
        let updatePreviousDatabase;

        if (toBeArchivedBlogpost.previouspost == null) {
            updatePreviousDatabase = await sql`update blogposts set previouspost = null where previouspost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost = await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        } else if (toBeArchivedBlogpost.nextpost == null) {
            updateNextDatabase = await sql`update blogposts set nextpost = null where nextpost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost = await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        } else if (toBeArchivedBlogpost.nextpost && toBeArchivedBlogpost.previouspost) {
            updatePreviousDatabase = await sql`
                    update blogposts 
                    set previouspost = ${toBeArchivedBlogpost.previouspost} 
                    where previouspost = ${toBeArchivedBlogpost.slug}`
            updateNextDatabase = await sql`
                    update blogposts 
                    set nextpost = ${toBeArchivedBlogpost.nextpost} 
                    where nextpost = ${toBeArchivedBlogpost.slug}`
            archivedBlogpost = await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        } else {
            archivedBlogpost = await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`
        }

        return [archivedBlogpost, updateNextDatabase, updatePreviousDatabase];
    })
    return [archiveTransaction]
}

/*components page*/
export async function fetchComponents() {
    const components = await sql`select * from components;`
    return components;
}

export async function fetchTags() {
    const tags = await sql`select tag_name from tags;`
    return tags;
}

export async function fetchMap() {
    const fin = await sql`select ct.component_id, c.title, t.tag_name from components_tags_map as ct, components as c, tags as t where ct.tag_id = t.tag_id and c.component_id = ct.component_id;`
    return fin;
}

export async function updateSingleComponent(component) {
    //neues array mit der Änderung des TagNamen wird übergeben --> Problem: welcher Name/welche id stand dort vorher? sonst können wir die nicht in der map-tabelle löschen
    const updateSingleComponentTransaction = await sql.begin(async sql => {
        const updateNameSingleComponent =  await sql `update components set title = ${component.title} where component_id=${component.component_id};`
        for(let i=0; i<component.tags.length; i++) {
            //check whether tag from component-tag-array is in table tags
            const checkTag = await sql `select exists(select * from tags where tag_name = ${component.tags[i]});`

            if (!checkTag[0].exists){
                console.log('tag',component.tags[i],'doesnt exists in table tags')

                //insert new tag into table tags with a new id
                await sql `insert into tags (tag_name) values (${component.tags[i]});`

                //store the new id in a variable from the new tag in table tags
                const newTagId = await sql `select tag_id from tags where tag_name = ${component.tags[i]};`

                //insert the new component-tag-pair in the table component_tags_map
                console.log('new tag id', newTagId[0].tag_id)
                console.log('component id', component.component_id)
                await sql `insert into components_tags_map (component_id, tag_id) values (${component.component_id}, ${newTagId[0].tag_id});`
            }
        }
        //delete the old tag from the component-tag-array in the table components_tags_maps
        //-->check whether there is a tag in the table components_tags_map which doesnt exist in the actual component-tag-array
        const wholeTagsInclOldTag = await sql `select tag_name from components_tags_map natural join tags natural join components where component_id=${component.component_id}`
        const tagNames = []
        for (let i = 0; i < wholeTagsInclOldTag.length; i++) {
            tagNames.push(wholeTagsInclOldTag[i].tag_name)
        }
        console.log('test array ',tagNames)
        console.log('actual tag array',component.tags)

        //--> check here whether there is tag which doesnt exist in the other array
        let oldTagName= []
        for (let t = 0; t < tagNames.length; t++) {
            if (!component.tags.includes(tagNames[t])) {
                console.log(component.tags[t], ' includes not array')
                oldTagName.push(tagNames[t])
            }
        }
        //-->check the id(s) from old tag name(s) and delete that row(s) from table components_tags_map
        console.log('oldTagName',oldTagName)
        for(let x=0;x<oldTagName.length;x++){
            const oldTagId = await sql `select tag_id from tags where tag_name=${oldTagName[x]}`
            await sql `delete from components_tags_map where component_id=${component.component_id} and tag_id=${oldTagId[0].tag_id}`
        }
        return updateNameSingleComponent
    })
    return updateSingleComponentTransaction
}

export async function deleteSingleComponent({component_id}){
    console.log('db.js')
    const deleteSingleComponent = await sql.begin(async sql => {
        const deletedComponentsTagsMap = await sql `delete from components_tags_map where component_id=${component_id};`
        const deletedComponent = await sql `delete from components where component_id=${component_id};`
        const allRelevantTags = await sql `delete from tags where tag_id not in (select distinct tag_id from components_tags_map);`
        return [deletedComponentsTagsMap, deletedComponent, allRelevantTags]
    })
    return deleteSingleComponent
}

export async function fetchSingleComponent({component_id}) {
    const tagsComponent = await sql`select t.tag_name from components_tags_map as ct, components as c, tags as t where ct.tag_id = t.tag_id and c.component_id = ct.component_id and c.component_id=${component_id};`
    const singleComponent = await sql`select * from components c where  c.component_id=${component_id};`
    const tags = []
    for (let i = 0; i < tagsComponent.length; i++) {
        tags.push(tagsComponent[i].tag_name)
    }
    return {component: singleComponent, tags: tags}
}

export async function processImportUpdateComponentsTables() {
    const updateTransaction = await sql.begin(async sql => {
        const importedComponents = components //with following structure : [{name: compo1, keywords: []},{name: compo2, keywords: []}]

        //delete table components_tags_map
        const deletedMapTable = await sql`delete from components_tags_map`

        //delete all data from tables components
        const deletedComponentsTable = await sql`delete from components`

        //delete table tags
        const deletedTagsTable = await sql`delete from tags`

        //insert imported data (package.json from import) into table components and table tags
        for (let i = 0; i < importedComponents.length; i++) {
            await sql`insert into components (title) values (${importedComponents[i].name})`
            for (let j = 0; j < importedComponents[i].keywords.length; j++) {
                await sql`insert into tags (tag_name) values (${importedComponents[i].keywords[j]})`
            }
        }
        await sql`delete from tags where tag_id not in (select max(tag_id) from tags group by tag_name)`

        //insert data into table components_tags_map
        for (let i = 0; i < importedComponents.length; i++) {
            const idComponent = await sql`select component_id from components where title=${importedComponents[i].name}` //{component_id: 1}
            const idKeywords = [] //[{tag_id:1}, {tag_id: :2}]
            for (let j = 0; j < importedComponents[i].keywords.length; j++) {
                idKeywords.push(await sql`select tag_id from tags where tag_name = ${importedComponents[i].keywords[j]}`)
            }

            for (let z = 0; z < idComponent.length; z++) {
                for (let x = 0; x < idKeywords.length; x++) {
                    await sql`insert into components_tags_map(component_id, tag_id) values (${idComponent[z].component_id}, ${idKeywords[x][0].tag_id})`
                }
            }
        }
        return [importedComponents, deletedComponentsTable, deletedMapTable, deletedTagsTable]
    })
    return updateTransaction
}
