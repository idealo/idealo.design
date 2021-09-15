import {Model, Sequelize} from "sequelize";

export class Tags extends Model {
    static fetchTags(){
        return Tags.findAll({
            attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('tag_id')) ,'tag_id'], 'tag_name'
            ]
        }).then(tags => tags.map(tag => {
            tag = tag.dataValues.tag_name
            return {tag_name: tag}
        }))
    }
}