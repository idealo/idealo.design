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
                    required: true,
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
                    component.screenshots.map(screenshot => {
                        screenshots.push(screenshot.screenshot)
                    })
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
                return singleComponent
            }else{
                return component
            }
        })
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
}

export class ComponentTagsMap extends Model {}

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
    definition: DataTypes.JSONB,
    design: DataTypes.JSONB,
    figma_usage: DataTypes.JSONB,
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