import './BlogPostTeaser.css';
import blogData from './blogData.json';


function BlogPostTeaser(){
    return blogData.map((blog) => {
            return (
                <div key={blog.id} className="Content">
                    <h2>{blog.title}</h2>
                    <img alt="" src={blog.image}/>
                    <p>
                        {blog.text}
                    </p>
                </div>
            )
        }
    )

}


export default BlogPostTeaser;
