import postgres from "postgres";
import slugify from "slugify";

const POSTGRES_URL =
    process.env.POSTGRES_URL ||
    "postgres://database-idealo-design.c9fyhsob8bxc.eu-central-1.rds.amazonaws.com";
const sql = postgres(POSTGRES_URL);

export async function importSingleComponent(screenshotPaths, componentData) {
    return sql.begin(async (sql) => {
        await sql`delete
                  from components
                  where title = ${componentData.name}`;
        const slug = slugify(componentData.name);
        await sql`insert into components (title, readme, slug)
                  values (${componentData.name}, ${componentData.readme}, ${slug});`;
        const newComponentId =
            await sql`select component_id
                      from components
                      where title = ${componentData.name}`;
        const currentComponentId = newComponentId[0].component_id;

        for (const screenshotPath of screenshotPaths) {
            await sql`insert into screenshots(component_id, screenshot)
                      values (${currentComponentId}, ${screenshotPath})`;
        }
        await sql`delete
                  from tags
                  where tag_id not in (select distinct tag_id from components_tags_map);`;

        for (const keyword of componentData.keywords) {
            const existingTag =
                await sql`select tag_id
                          from tags
                          where tag_name = ${keyword}`;
            const existingTagId = existingTag[0];

            if (existingTagId !== undefined) {
                await sql`insert into components_tags_map (component_id, tag_id)
                          values (${currentComponentId}, ${existingTagId.tag_id})`;
            } else {
                await sql`insert into tags(tag_name)
                          values (${keyword})`;
                const tagId =
                    await sql`select tag_id
                              from tags
                              where tag_name = ${keyword}`;
                const currentTagId = tagId[0].tag_id;
                await sql`insert into components_tags_map(component_id, tag_id)
                          values (${currentComponentId}, ${currentTagId})`;
            }
        }
    });
}