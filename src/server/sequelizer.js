import {Sequelize} from "sequelize";
import {ComponentTagsMap, Library, Screenshots, Tags} from "./models/Library";

const sequelize = new Sequelize (
    process.env.POSTGRES_URL ||
    "postgres://database-idealo-design.c9fyhsob8bxc.eu-central-1.rds.amazonaws.com",
    {
        dialectOptions: {
            useUTC: false
        },
        timezone: '+02:00'
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        Library.hasMany(ComponentTagsMap, {
            foreignKey: 'component_id',
            onDelete: 'CASCADE'
        })
        Library.hasMany(Screenshots, {
            foreignKey: 'component_id',
            onDelete: 'CASCADE'
        })
        Tags.belongsToMany(Library, {
            foreignKey: 'tag_id',
            through: ComponentTagsMap
        })
        Screenshots.belongsTo(Library, {
            foreignKey: 'component_id'
        })
        Library.belongsToMany(Tags, {
            foreignKey: 'component_id',
            through: ComponentTagsMap
        })
        ComponentTagsMap.belongsTo(Library,{
            foreignKey: 'component_id'
        })
        Tags.hasMany(ComponentTagsMap, {
            foreignKey: 'tag_id',
            onDelete: 'CASCADE'
        })
        ComponentTagsMap.belongsTo(Tags, {
            foreignKey: 'tag_id'
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export {sequelize}