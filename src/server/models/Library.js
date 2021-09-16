import {Model, Sequelize} from "sequelize";

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
            const singleComponent = component.toJSON()
            singleComponent.screenshots = await Screenshots.fetchAllScreenshotPaths(singleComponent.component_id)
            return singleComponent
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