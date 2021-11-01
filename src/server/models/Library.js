import {DataTypes, Model, Sequelize} from "sequelize";
import {sequelize} from "../sequelizer";

export class Library extends Model {
    static fetchAllComponents(){
        try {
            return Library.findAll({
                include: [{
                    model: Tags,
                    required: true,
                    through: ComponentTagsMap,
                    attributes: ['tag_name']
                }, {
                    model: Screenshots,
                    required: false,
                    attributes: ['screenshot']
                }]
            }).then(libraries => {
                const components = []
                libraries.map(library => {
                    const tags = []
                    const screenshots = []
                    const component = library.toJSON()
                    component.tags.map(tag => {
                        tags.push(tag.tag_name)
                    })
                    if(component.screenshots){
                        component.screenshots.map(screenshot => {
                            screenshots.push(screenshot.screenshot)
                        })
                    }
                    component.tags = tags
                    component.screenshots = screenshots
                    components.push(component)
                })
                return components
            })
        }catch (e) {
            console.error(e)
        }
    }
    static fetchSingleComponent({slug}){
        return Library.findOne({
            where: {
                slug: slug
            }
        }).then(async component => {
            if(component){
                const singleComponent = component.toJSON()
                singleComponent.screenshots = await Screenshots.fetchAllScreenshotPaths(singleComponent.component_id)
                const tagIds = await ComponentTagsMap.fetchTagIdsForSingleComponent(component.component_id)
                const tagNames = []
                for(const tagId of tagIds){
                    tagNames.push(await Tags.fetchSingleTagById(tagId))
                }
                singleComponent.tags = tagNames
                return singleComponent
            }else{
                return component
            }
        })
    }

    static async insertSingleComponent({component}) {
        await Library.create({
            slug: component.slug,
            title: component.title,
            definition: component.definition,
            usage: component.usage,
            implementation: component.implementation,
            design: component.design,
            updated_on: component.updated_on,
        })

        const component_id = await Library.fetchSingleComponent({slug: component.slug}).then(component => {return component.component_id})

        for(let tag of component.tags){
            const tag_id = await Tags.fetchSingleTagByName(tag)
            await ComponentTagsMap.insertTagIdComponentIdPairs(tag_id, component_id)
        }
    }
}

export class Tags extends Model {
    static fetchTags(){
        return Tags.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('tag_id')) ,'tag_name'], 'tag_name'
            ]
        }).then(tags => tags.map(tag => {
            return tag.toJSON()
        }))
    }

    static fetchSingleTagById(id){
        return Tags.findOne({
            attributes: ['tag_name'],
            where: {
                tag_id: id
            }
        }).then(tag => {
            return tag.getDataValue('tag_name')
        })
    }

    static fetchSingleTagByName(name){
        return Tags.findOne({
            attributes: ['tag_id'],
            where: {
                tag_name: name
            }
        }).then(tag => {
            return tag.getDataValue('tag_id')
        })
    }
}

export class ComponentTagsMap extends Model {
    static fetchTagIdsForSingleComponent(componentId){
        return ComponentTagsMap.findAll({
            attributes: ['tag_id'],
            where: {
                component_id: componentId
            }
        }).then(tagIds => {
            const ids = []
            tagIds.map(tagId => {
                ids.push(tagId.getDataValue('tag_id'))
            })
            return ids;
        })
    }
    static insertTagIdComponentIdPairs(tag_id, component_id){
        return ComponentTagsMap.create({
            component_id: component_id,
            tag_id: tag_id
        })
    }
}

export class Screenshots extends Model {
    static fetchAllScreenshotPaths(componentId){
        return Screenshots.findAll({
            attributes: ['screenshot'],
            where: {
                component_id: componentId
            }
        }).then(screenshotPaths => {
            const paths = []
            screenshotPaths.map(screenshotPath => {
                paths.push(screenshotPath.getDataValue('screenshot'))
            })
            return paths
        })
    }
}

Screenshots.init({
    component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    screenshot_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    screenshot: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'screenshots',
    timestamps: false,
    modelName: 'screenshots',
    sequelize: sequelize
})

Library.init({
    component_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    readme: DataTypes.JSONB,
    implementation: DataTypes.JSONB,
    definition: DataTypes.STRING,
    design: DataTypes.JSONB,
    usage: DataTypes.STRING,
    updated_on: DataTypes.DATE
}, {
    tableName: 'components',
    timestamps: false,
    sequelize: sequelize
})

ComponentTagsMap.init({
    component_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        references: {
            model: 'Library',
            key: 'component_id'
        }
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Tags',
            key: 'tag_id'
        }
    }
}, {
    tableName: 'components_tags_map',
    timestamps: false,
    sequelize: sequelize
})

Tags.init({
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    tag_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tags',
    timestamps: false,
    modelName: 'tags',
    sequelize: sequelize
})