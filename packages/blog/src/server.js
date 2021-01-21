const express = require('express');
const { 
    fetchList, 
    fetchAllCategories,
    fetchPostsByCategorySlug,
    fetchSinglePost, 
} = require('./NodeData');
const app = express();


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

    app.get('/api/categories', async (req, res) => {
    const categories = await fetchAllCategories();
    return res.json(categories);
}); 

app.listen(8080, () => console.log(' --> http://localhost:8080'));
