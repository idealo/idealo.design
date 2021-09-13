import {Sequelize, Model, DataTypes, Op} from 'sequelize'

const sequelize = new Sequelize (
    process.env.POSTGRES_URL ||
    "postgres://database-idealo-design.c9fyhsob8bxc.eu-central-1.rds.amazonaws.com"
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  //await Blog.fetchPrevAndNextSlugByBlogpostId({id:6})
  //await sequelize.sync()
  //await sequelize.close()
})();

export class Blog extends Model {
  static fetchAllBlogposts(){
    return Blog.findAll({
      where: {
        isarchived: 0
      },
      order: [
        ['date', 'DESC']
      ],
    })
  }
  static fetchSingleBlogpost({slug}){
    return Blog.findAll({
      where: {
        slug: slug,
      }
    })
  }

  static fetchAllCategories(){
    return Blog.findAll({
      attributes: [[Sequelize.literal('DISTINCT "categoryslug"'), 'categoryslug'], 'categorydisplayvalue'],
      where:{
        isarchived: 0
      }
    })
  }

  static fetchAllBlogpostsByCategorySlug({categorySlug}){
    return Blog.findAll({
      where: {
        categoryslug: categorySlug,
        isarchived: 0
      },
      order: [
        ['date', 'DESC']
      ],
    })
  }

  static async fetchPrevAndNextSlugByBlogpostId({id}) {
    const ta = await sequelize.transaction()
    try {
      let prevSlug = await Blog.findAll({
        attributes: ['slug'],
        where: {
          slug: await Blog.findOne({
            attributes: ['slug'],
            where: {
              nextpost: id
            }
          }).then(resp => {
            if (resp !== null) {
              return resp.dataValues.slug
            } else {
              return null
            }
          })
        },
        ta
      })

      let nextSlug = await Blog.findAll({
        attributes: ['slug'],
        where: {
          slug: await Blog.findOne({
            attributes: ['slug'],
            where: {
              previouspost: id
            }
          }).then(resp => {
            if (resp !== null) {
              return resp.dataValues.slug
            } else {
              return null
            }
          })
        },
        ta
      })

      if (nextSlug.length === 0) {
        nextSlug = {slug: null}
      }else if(nextSlug.length===1){
        nextSlug = nextSlug[0]
      }
      if (prevSlug.length === 0) {
        prevSlug = {slug: null}
      }else if(prevSlug.length===1){
        prevSlug = prevSlug[0]
      }
      await ta.commit()
      return [prevSlug, nextSlug]
    }catch (e){
      await ta.rollback()
    }
  }
}

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