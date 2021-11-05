import {DataTypes, Model, Sequelize} from "sequelize";
import {sequelize} from "../sequelizer";
import {returnFocus} from "react-modal/lib/helpers/focusManager";

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
        const ta = await sequelize.transaction()
        try{
            const newComponentId = await Library.create({
                slug: component.slug,
                title: component.title,
                definition: component.definition,
                usage: component.usage,
                implementation: component.implementation,
                design: component.design,
                updated_on: component.updated_on,
            }).then(result => {
                return result.getDataValue('component_id')
            })

            for(let tag of component.tags){
                const existingTagId = await Tags.fetchSingleTagByName(tag)
                if(!existingTagId){
                    await Tags.createSingleTag(tag)
                }
                const tag_id = await Tags.fetchSingleTagByName(tag)
                await ComponentTagsMap.insertTagIdComponentIdPairs(tag_id, newComponentId)
            }
        }catch (e){
            console.error(e)
            await ta.rollback()
        }
    }

    static async updateSingleComponent({component}){
        const ta = await sequelize.transaction()
        try {
            await Library.update({
                title: component.title,
                slug: component.slug,
                definition: component.definition,
                usage: component.usage,
                updated_on: component.updated_on,
                implementation: component.implementation,
            }, {
                where: {
                    component_id: component.component_id
                }
            }, {transaction: ta})

            await ComponentTagsMap.deleteTagIdComponentIdPairs(component.component_id)
            const ids = []
            for(let tag of component.tags){
                const existingTagId = await Tags.fetchSingleTagByName(tag)
                if(!existingTagId){
                    await Tags.createSingleTag(tag)
                }
                ids.push(await Tags.fetchSingleTagByName(tag))
            }

            for(let id of ids){
                await ComponentTagsMap.insertTagIdComponentIdPairs(id, component.component_id)
            }

            const tags = await Tags.fetchTags()
            const distinctTags = await ComponentTagsMap.fetchDistinctTagIds()

            for(const tag of tags){
                if(!distinctTags.includes(tag.tag_id)){
                    await Tags.deleteSingleTagByTagId(tag.tag_id)
                }
            }
        }catch (e) {
            await ta.rollback()
            console.error(e)
        }
    }

    static deleteSingleComponent({component}){
        return Library.destroy({
            where: {
                component_id: component.component_id
            }
        })
    }
}

export class Tags extends Model {
    static fetchTags(){
        return Tags.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('tag_id')) ,'tag_name'], 'tag_id','tag_name'
            ]
        }).then(tags => tags.map(tag => {
            return tag.toJSON()
        }))
    }

    static createSingleTag(tagName){
        return Tags.create({
            tag_name: tagName
        })
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
            if(!tag){
                return false;
            }else{
                return tag.getDataValue('tag_id')
            }
        })
    }

    static deleteSingleTagByTagId(tag_id){
        return Tags.destroy({
            where: {
                tag_id: tag_id
            }
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
                if(tagId){
                    ids.push(tagId.getDataValue('tag_id'))
                }
            })
            if(ids.length){
                return ids;
            }else{
                return false;
            }
        })
    }
    static insertTagIdComponentIdPairs(tag_id, component_id){
        return ComponentTagsMap.create({
            component_id: component_id,
            tag_id: tag_id
        })
    }

    static deleteTagIdComponentIdPairs(componentId){
        return ComponentTagsMap.destroy({
            where: {
                component_id: componentId
            }
        })
    }

    static fetchDistinctTagIds(){
        return ComponentTagsMap.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('tag_id')) ,'component_id'], 'tag_id'
            ]
        }).then(idPairs => idPairs.map(idPair => {
            return idPair.getDataValue('tag_id')
        }))
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