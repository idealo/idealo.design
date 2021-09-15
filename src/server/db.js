import {DataTypes, Model, Op, Sequelize} from 'sequelize'

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
                transaction: ta
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
                transaction: ta
            })

            if (nextSlug.length === 0) {
                nextSlug = {slug: null}
            }else if(nextSlug.length===1){
                nextSlug = nextSlug[0]
            }
            if (prevSlug.length === 0) {
                prevSlug = {slug: null}
            }else if(prevSlug.length === 1){
                prevSlug = prevSlug[0]
            }
            await ta.commit()
            return [prevSlug, nextSlug]
        }catch (e){
            await ta.rollback()
        }
    }

    static async insertSingleBlogpost({
                                          title = "",
                                          date,
                                          categoryDisplayValue = "",
                                          categorySlug = "",
                                          slug,
                                          image = "",
                                          blogpostcontent,
                                          isArchived = 0
                                      }){
        const ta = await sequelize.transaction()
        try {
            await Blog.create({
                title: title,
                date: date,
                categorydisplayvalue: categoryDisplayValue,
                categoryslug: categorySlug,
                slug: slug,
                image: image,
                blogpostcontent: blogpostcontent,
                isarchived: isArchived,
                nextpost: await Blog.findOne({
                    attributes: ['id'],
                    where: {
                        isarchived: 0,
                        date: await Blog.findOne({
                            attributes: [[sequelize.fn('max', sequelize.col('date')), 'date']],
                            where: {
                                isarchived: 0
                            }
                        }).then(date => {
                            return date.dataValues.date
                        })
                    },
                    transaction: ta
                }).then(id => {
                    return id.dataValues.id
                })
            })

            await Blog.update({
                    previouspost: await Blog.findOne({
                        attributes: ['id'],
                        where: {
                            slug: slug
                        }
                    }).then(id => {
                        return id.dataValues.id
                    }),
                },
                {
                    where: {
                        isarchived: 0,
                        date: await Blog.findOne({
                            attributes: [[sequelize.fn('max', sequelize.col('date')), 'date']],
                            where: {
                                [Op.and]: [
                                    {isarchived: 0},
                                    {
                                        date: {
                                            [Op.lt]: await Blog.findOne({
                                                attributes: [[sequelize.fn('max', sequelize.col('date')), 'date']]
                                            }).then(date => {
                                                return date.dataValues.date
                                            })
                                        }
                                    }
                                ]
                            },
                            transaction: ta
                        }).then(date => {
                            return date.dataValues.date
                        })
                    }
                })
            await ta.commit()
        }catch (e) {
            console.error(e)
            await ta.rollback()
        }
    }

    static updateBlogpost(blog){
        return Blog.update({
            title: blog.title,
            slug: blog.slug,
            categorydisplayvalue: blog.categorydisplayvalue,
            categoryslug: blog.categoryslug,
            blogpostcontent: JSON.parse(blog.blogpostcontent)
        }, {
            where: {
                id: blog.id
            }
        })
    }

    static async deleteSingleBlogpost(blog) {
        const ta = await sequelize.transaction()
        try {
            if (blog.previouspost === null && blog.nextpost) {
                await Blog.update({
                    previouspost: null
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })
            } else if (blog.nextpost === null && blog.previouspost) {
                await Blog.update({
                    nextpost: null
                }, {
                    where: {
                        nextpost: blog.id
                    },
                    transaction: ta
                })
            }

            if (blog.previouspost === null) {
                await Blog.update({
                    previouspost: null
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })
            } else if (blog.nextpost === null) {
                await Blog.update({
                    nextpost: null
                }, {
                    where: {
                        nextpost: blog.id
                    },
                    transaction: ta
                })
            } else if (blog.nextpost && blog.previouspost) {
                await Blog.update({
                    previouspost: blog.previouspost
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })

                await Blog.update({
                    nextpost: blog.nextpost
                }, {
                    where: {
                        nextpost: blog.id
                    },
                    transaction: ta
                })
            }
            await Blog.destroy({
                where: {
                    id: blog.id
                },
                transaction: ta
            })

            await ta.commit()
        }catch (e) {
            console.error(e)
            await ta.rollback()
        }
    }

    static async archiveSingleBlogpost(blog) {
        const ta = await sequelize.transaction()
        try{
            if(blog.previouspost === null){
                await Blog.update({
                    previouspost: null
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })

                await Blog.update({
                    isarchived: 1,
                    previouspost: null,
                    nextpost: null
                }, {
                    where: {
                        id: blog.id
                    },
                    transaction: ta
                })
            }else if(blog.nextpost && blog.previouspost){
                await Blog.update({
                    previouspost: blog.previouspost
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })

                await Blog.update({
                    nextpost: blog.nextpost
                },{
                    where: {
                        nextpost: blog.id
                    }
                })

                await Blog.update({
                    isarchived: 1,
                    previouspost: null,
                    nextpost: null
                }, {
                    where: {
                        id: blog.id
                    },
                    transaction: ta
                })
            }else {
                await Blog.update({
                    isarchived: 1,
                    previouspost: null,
                    nextpost: null
                }, {
                    where: {
                        id: blog.id
                    },
                    transaction: ta
                })
            }
            await ta.commit()
        }catch (e) {
            console.error(e)
            await ta.rollback()
        }
    }
}

export class ComponentTagsMap extends Model {}
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

export class Screenshots extends Model {}

export class Library extends Model {
    static async fetchAllComponents(){
        try {
            const components = []
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
                    library.dataValues.ons.map(tag => {
                        tags.push(tag.dataValues.tag_name)
                    })

                    library.dataValues.lns.map(screenshot => {
                        screenshots.push(screenshot.dataValues.screenshot)
                    })
                    const component = library.dataValues
                    component.tags = tags
                    component.screenshots = screenshots
                    components.push(component)
                    delete library.dataValues['ons']
                    delete library.dataValues['lns']
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
            component.dataValues.lns.map(screenshot => {
                screenshots.push(screenshot.dataValues.screenshot)
            })
            const singleComponent = component.dataValues
            singleComponent.screenshots = screenshots
            delete component.dataValues['lns']
            return singleComponent
        })
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
