import postgres from "postgres";
import slugify from "slugify";

const POSTGRES_URL =
  process.env.POSTGRES_URL ||
  "postgres://database-idealo-design.c9fyhsob8bxc.eu-central-1.rds.amazonaws.com";
const sql = postgres(POSTGRES_URL);

export async function fetchList() {
  return sql`select * from blogposts where isArchived = 0 ORDER BY blogposts.date DESC`;
}

export async function fetchSinglePost({ slug }) {
  return sql`select * from blogposts where slug = ${slug};`;
}

export async function fetchDistinctCategories() {
  return sql`select distinct categoryDisplayValue, LOWER(categorySlug) as categoryslug from blogposts where isArchived = 0`;
}

export async function fetchPostsByCategorySlug({ categorySlug }) {
  return sql`select * from blogposts where categoryslug = ${categorySlug} AND isArchived = 0 ORDER BY blogposts.date DESC`;
}

export async function fetchAllCategories() {
  return sql`select categoryslug,count(id) as sum  from blogposts group by categoryslug order by sum desc limit 5;`;
}

export async function fetchAllTitles() {
  return sql`select title from blogposts;`;
}

export async function storeSinglePost({
  title = "",
  date,
  categoryDisplayValue = "",
  categorySlug = "",
  slug,
  image = "",
  blogpostcontent,
  isArchived = 0,
}) {
  const [storeSinglePostTransaction] = await sql.begin(async (sql) => {
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
        );`;

    const updatePost = await sql`
        update blogposts
        set previouspost=${slug}
        where isArchived = 0 and date= (select max(date) from blogposts where isArchived= 0 and date<(select max(date) from blogposts))
        and slug not in (${slug});`;

    return [createPost, updatePost];
  });
  return [storeSinglePostTransaction];
}

export async function updateSinglePost(blog) {
  return sql`
        update blogposts set ${sql(
          blog,
          "title",
          "categoryDisplayValue",
          "categorySlug",
          "blogpostcontent"
        )} where
            id = ${blog.id}`;
}

export async function deleteSinglePost(blog) {
  const [deleteTransaction] = await sql.begin(async (sql) => {
    const [toBeDeletedBlogpost] =
      await sql`select * from blogposts where id=${blog.id}`;

    let deletedBlogpost;
    let updateNextDatabase;
    let updatePreviousDatabase;

    if (
      toBeDeletedBlogpost.previouspost == null &&
      toBeDeletedBlogpost.nextpost
    ) {
      updatePreviousDatabase =
        await sql`update blogposts set previouspost = null where previouspost = ${toBeDeletedBlogpost.slug}`;
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    } else if (
      toBeDeletedBlogpost.nextpost == null &&
      toBeDeletedBlogpost.previouspost
    ) {
      updateNextDatabase =
        await sql`update blogposts set nextpost = null where nextpost = ${toBeDeletedBlogpost.slug}`;
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    }

    if (toBeDeletedBlogpost.previouspost == null) {
      updatePreviousDatabase =
        await sql`update blogposts set previouspost = null where previouspost = ${toBeDeletedBlogpost.slug}`;
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    } else if (toBeDeletedBlogpost.nextpost == null) {
      updateNextDatabase =
        await sql`update blogposts set nextpost = null where nextpost = ${toBeDeletedBlogpost.slug}`;
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    } else if (
      toBeDeletedBlogpost.nextpost &&
      toBeDeletedBlogpost.previouspost
    ) {
      updatePreviousDatabase = await sql`
                    update blogposts 
                    set previouspost = ${toBeDeletedBlogpost.previouspost} 
                    where previouspost = ${toBeDeletedBlogpost.slug}`;
      updateNextDatabase = await sql`
                    update blogposts 
                    set nextpost = ${toBeDeletedBlogpost.nextpost} 
                    where nextpost = ${toBeDeletedBlogpost.slug}`;
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    } else {
      deletedBlogpost =
        await sql`delete from blogposts where id = ${toBeDeletedBlogpost.id}`;
    }

    return [deletedBlogpost, updateNextDatabase, updatePreviousDatabase];
  });
  return [deleteTransaction];
}

export async function archiveSinglePost(blog) {
  const [archiveTransaction] = await sql.begin(async (sql) => {
    const [toBeArchivedBlogpost] =
      await sql`select * from blogposts where id=${blog.id}`;

    let archivedBlogpost;
    let updateNextDatabase;
    let updatePreviousDatabase;

    if (toBeArchivedBlogpost.previouspost == null) {
      updatePreviousDatabase =
        await sql`update blogposts set previouspost = null where previouspost = ${toBeArchivedBlogpost.slug}`;
      archivedBlogpost =
        await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`;
    } else if (toBeArchivedBlogpost.nextpost == null) {
      updateNextDatabase =
        await sql`update blogposts set nextpost = null where nextpost = ${toBeArchivedBlogpost.slug}`;
      archivedBlogpost =
        await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`;
    } else if (
      toBeArchivedBlogpost.nextpost &&
      toBeArchivedBlogpost.previouspost
    ) {
      updatePreviousDatabase = await sql`
                    update blogposts 
                    set previouspost = ${toBeArchivedBlogpost.previouspost} 
                    where previouspost = ${toBeArchivedBlogpost.slug}`;
      updateNextDatabase = await sql`
                    update blogposts 
                    set nextpost = ${toBeArchivedBlogpost.nextpost} 
                    where nextpost = ${toBeArchivedBlogpost.slug}`;
      archivedBlogpost =
        await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`;
    } else {
      archivedBlogpost =
        await sql`update blogposts set isArchived = 1,previouspost=null,nextpost=null where slug = ${blog.slug}`;
    }

    return [archivedBlogpost, updateNextDatabase, updatePreviousDatabase];
  });
  return [archiveTransaction];
}

export async function fetchComponents() {
  const allComponentsIds = await sql`select component_id from components;`;
  let allComponents = [];
  for (let componentId of allComponentsIds) {
    let tagsObject =
      await sql`select tags.tag_name from components_tags_map natural join components natural join tags where components.component_id=${componentId.component_id};`;
    let screenshotsObject =
      await sql`select screenshot from screenshots natural join components where components.component_id=${componentId.component_id};`;
    let componentDetails =
      await sql`select * from components where components.component_id=${componentId.component_id};`;

    let component = componentDetails[0]

    let tags = []
    for(let tag of tagsObject){
      tags.push(tag.tag_name)
    }

    let screenshots = []
    for(let screenshot of screenshotsObject){
      screenshots.push(screenshot.screenshot)
    }

    component.tags = tags;
    component.screenshots = screenshots;
    allComponents.push(component);
  }
  return allComponents;
}

export async function fetchTags() {
  return sql`select tag_name from tags;`;
}

export async function fetchMap() {
  return sql`select ct.component_id, c.title, t.tag_name
                     from components_tags_map as ct,
                          components as c,
                          tags as t
                     where ct.tag_id = t.tag_id
                       and c.component_id = ct.component_id;`;
}

export async function updateSingleComponent(component) {
  return sql.begin(async (sql) => {
    const updateNameSingleComponent = await sql`update components
                                                    set title = ${component.title}
                                                    where component_id = ${component.component_id};`;
    for (let i = 0; i < component.tags.length; i++) {
      const checkTag =
        await sql`select exists(select * from tags where tag_name = ${component.tags[i]});`;

      if (!checkTag[0].exists) {
        await sql`insert into tags (tag_name) values (${component.tags[i]});`;
        const newTagId =
          await sql`select tag_id from tags where tag_name = ${component.tags[i]};`;
        await sql`insert into components_tags_map (component_id, tag_id) values (${component.component_id}, ${newTagId[0].tag_id});`;
      }
    }
    const wholeTagsInclOldTag = await sql`select tag_name
                                              from components_tags_map
                                                       natural join tags
                                                       natural join components
                                              where component_id = ${component.component_id}`;
    const tagNames = [];
    for (let i = 0; i < wholeTagsInclOldTag.length; i++) {
      tagNames.push(wholeTagsInclOldTag[i].tag_name);
    }

    let oldTagNames = [];
    for (let t = 0; t < tagNames.length; t++) {
      if (!component.tags.includes(tagNames[t])) {
        oldTagNames.push(tagNames[t]);
      }
    }
    for (let x = 0; x < oldTagNames.length; x++) {
      const oldTagId =
        await sql`select tag_id from tags where tag_name=${oldTagNames[x]}`;
      await sql`delete from components_tags_map where component_id=${component.component_id} and tag_id=${oldTagId[0].tag_id}`;
    }

    await sql`delete from tags where tag_id not in (select distinct tag_id from components_tags_map)`;
    return updateNameSingleComponent;
  });
}

export async function deleteSingleComponent({ component_id }) {
  return sql.begin(async (sql) => {
    const deletedComponentsTagsMap =
      await sql`delete from components_tags_map where component_id=${component_id};`;
    const deletedComponent = await sql`delete
                                           from components
                                           where component_id = ${component_id};`;
    const allRelevantTags =
      await sql`delete from tags where tag_id not in (select distinct tag_id from components_tags_map);`;
    return [deletedComponentsTagsMap, deletedComponent, allRelevantTags];
  });
}

export async function fetchSingleComponent({ slug }) {
  const tagsComponent =
    await sql`select tags.tag_name from components_tags_map natural join components natural join tags where components.slug=${slug};`;
  const singleComponent =
    await sql`select * from components c where  c.slug=${slug};`;
  const tags = [];
  for (let i = 0; i < tagsComponent.length; i++) {
    tags.push(tagsComponent[i].tag_name);
  }
  return { component: singleComponent, tags: tags };
}

export async function importSingleComponent(screenshotPaths, componentData) {
  return sql.begin(async (sql) => {
    await sql`delete from components where title=${componentData.name}`;
    const slug = slugify(componentData.name);
    await sql`insert into components (title, readme, slug) values (${componentData.name},${componentData.readme},${slug});`;
    const newComponentId =
      await sql`select component_id from components where title=${componentData.name}`;
    const currentComponentId = newComponentId[0].component_id;

    for (const screenshotPath of screenshotPaths) {
      await sql`insert into screenshots(component_id, screenshot) values(${currentComponentId},${screenshotPath})`;
    }
    await sql`delete from tags where tag_id not in (select distinct tag_id from components_tags_map);`;

    for (const keyword of componentData.keywords) {
      const existingTag =
        await sql`select tag_id from tags where tag_name=${keyword}`;
      const existingTagId = existingTag[0];

      if (existingTagId !== undefined) {
        await sql`insert into components_tags_map (component_id, tag_id) values (${currentComponentId}, ${existingTagId.tag_id})`;
      } else {
        await sql`insert into tags(tag_name) values(${keyword})`;
        const tagId =
          await sql`select tag_id from tags where tag_name=${keyword}`;
        const currentTagId = tagId[0].tag_id;
        await sql`insert into components_tags_map(component_id,tag_id) values (${currentComponentId}, ${currentTagId})`;
      }
    }
  });
}
