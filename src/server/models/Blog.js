import {DataTypes, Model, Sequelize} from "sequelize";
import {sequelize} from "../sequelizer"

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

    static fetchAllBlogpostTitles(){
        return Blog.findAll({
            attributes: ['title'],
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
            let prevSlug = await Blog.findOne({
                attributes: ['slug'],
                where: {
                    slug: await Blog.findOne({
                        attributes: ['slug'],
                        where: {
                            nextpost: id
                        },
                        transaction: ta,
                    }).then(slug => {
                        if (slug) {
                            return slug.getDataValue('slug')
                        } else {
                            return null
                        }
                    })
                },
                transaction: ta
            }).then(slug => {
                if(slug){
                    return slug.toJSON()
                }else{
                    return {slug: null}
                }
            })

            let nextSlug = await Blog.findOne({
                attributes: ['slug'],
                where: {
                    slug: await Blog.findOne({
                        attributes: ['slug'],
                        where: {
                            previouspost: id
                        },transaction: ta
                    }).then(slug => {
                        if (slug) {
                            return slug.getDataValue('slug')
                        } else {
                            return null
                        }
                    })
                },
                transaction: ta
            }).then(slug => {
                if(slug){
                    return slug.toJSON()
                }else{
                    return {slug: null}
                }
            })
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
                                          isArchived = 0,
                                          autor
                                      }){
        const ta = await sequelize.transaction()
        try {
            const latestDate = await Blog.findOne({
                attributes: [
                    [Sequelize.fn('MAX', Sequelize.col('date')), 'date']
                ],
                where: {
                    isarchived: 0
                },transaction: ta
            }).then(date => {
                return date.getDataValue('date')
            })

            const idNextPost = await Blog.findOne({
                attributes: ['id'],
                where: {
                    isarchived: 0,
                    date: latestDate
                },
                transaction: ta
            }).then((id) => {
                return id.getDataValue('id')
            })

            await Blog.create({
                title: title,
                date: date,
                categorydisplayvalue: categoryDisplayValue,
                categoryslug: categorySlug,
                slug: slug,
                image: image,
                blogpostcontent: blogpostcontent,
                isarchived: isArchived,
                autor: autor,
                nextpost: idNextPost
            }, {transaction: ta})

            const maxDate = await Blog.findOne({
                attributes: [
                    [Sequelize.fn('MAX', Sequelize.col('date')), 'date']
                ], where: {
                    isarchived: 0
                }
            }).then(date => {
                return date.getDataValue('date')
            })

            await Blog.update({
                    previouspost: await Blog.findOne({
                        attributes: ['id'],
                        where: {
                            slug: slug
                        },transaction: ta
                    }).then(id => {
                        return id.getDataValue('id')
                    }),
                },
                {
                    where: {
                        isarchived: 0,
                        date: maxDate
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
            if (!blog.previouspost && blog.nextpost) {
                await Blog.update({
                    previouspost: null
                }, {
                    where: {
                        previouspost: blog.id
                    },
                    transaction: ta
                })
            } else if (!blog.nextpost && blog.previouspost) {
                await Blog.update({
                    nextpost: null
                }, {
                    where: {
                        nextpost: blog.id
                    },
                    transaction: ta
                })
            }

            if (blog.nextpost && blog.previouspost) {
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
                    }, transaction: ta
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