const express = require('express');
const { 
    fetchList, 
    fetchAllCategories,
    fetchPostsByCategorySlug,
    fetchSinglePost, 
} = require('./Data');
const app = express();


app.get('/api/blogposts/:slug?', (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        const { byCategorySlug: categorySlug } = req.query;
        let posts = [];

        if (categorySlug) {
            posts = fetchPostsByCategorySlug({categorySlug});
        } else {
            posts = fetchList();
        }

        return res.json(posts);
    }

    const blogpost = fetchSinglePost({ slug });
    return res.json(blogpost);
});

app.get('/api/categories', (req, res) => {
    const categories = fetchAllCategories();  
    return res.json(categories);
}); 

app.listen(8080, () => console.log(' --> http://localhost:8080'));
