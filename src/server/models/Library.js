import {Model} from "sequelize";
import {Tags} from "./Tags";

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
                    library.dataValues.tags.map(tag => {
                        tags.push(tag.dataValues.tag_name)
                    })

                    library.dataValues.screenshots.map(screenshot => {
                        screenshots.push(screenshot.dataValues.screenshot)
                    })
                    const component = library.dataValues
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
            include: [{
                model: Screenshots,
                required: true,
                attributes: ['screenshot']

            }],
            where: {
                slug: slug
            }
        }).then(component => {
            const screenshots = []
            component.dataValues.screenshots.map(screenshot => {
                screenshots.push(screenshot.dataValues.screenshot)
            })
            const singleComponent = component.dataValues
            singleComponent.screenshots = screenshots
            return singleComponent
        })
    }
}

export class ComponentTagsMap extends Model {}
export class Screenshots extends Model {}