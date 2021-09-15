import { app } from "./server.js";
import {DataTypes, Sequelize} from "sequelize";
import {ComponentTagsMap, Library, Screenshots} from "./models/Library";
import {Blog} from "./models/Blog";
import {Tags} from "./models/Tags"

const PORT = process.env.HTTP_PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(` -> 0.0.0.0:${PORT}`);
});

export const sequelize = new Sequelize (
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
    Screenshots.belongsTo(Library)
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

Blog.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nextpost: DataTypes.INTEGER,
  previouspost: DataTypes.INTEGER,
  categoryslug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categorydisplayvalue: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  blogpostcontent: DataTypes.JSONB,
  isarchived: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultvalue: 0
  },
  image: DataTypes.STRING,
  autor: DataTypes.STRING,
  email: DataTypes.STRING,
  instagram: DataTypes.STRING,
  twitter:  DataTypes.STRING,
  github: DataTypes.STRING,
  facebook: DataTypes.STRING,
}, {
  tableName: "blogposts",
  timestamps: false,
  sequelize
});

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
  figma_usage: DataTypes.JSONB,
  updated_on: DataTypes.DATE
}, {
  tableName: 'components',
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