const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const slugify = require('slugify');

const { 
    fetchList, 
    fetchAllCategories,
    fetchPostsByCategorySlug,
    fetchSinglePost,
    storeSinglePost, 
} = require('./NodeData');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/blogposts/:slug?', async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        const { byCategorySlug: categorySlug } = req.query;
        let posts = [];

        if (categorySlug) {
            posts = await fetchPostsByCategorySlug({categorySlug});
        } else {
            posts = await fetchList();
        }

        return res.json(posts);
    }

    const blogpost = await fetchSinglePost({ slug });
    return res.json(blogpost);
});

app.post('/api/blogposts', async (req, res) => {
    const newBlogpost = req.body;
    newBlogpost.title = 'my title'; // Removed by Ticket 9.10
    newBlogpost.slug = slugify(newBlogpost.title);
    newBlogpost.date = (new Date()).toISOString();

    const createdBlogpost = await storeSinglePost(newBlogpost);

    return res.json(createdBlogpost);
});

app.get('/api/categories', async (req, res) => {
    const categories = await fetchAllCategories();
    return res.json(categories);
}); 

app.listen(8080, () => console.log(' --> http://localhost:8080'));
