import './BlogPostTeaser.css';
import blogData from './blogData.json';


function BlogPostTeaser(){
        const blogDataList = blogData.map((blogData) => {
            return (
                <div className="Content">
                    <h2>{blogData.title}</h2>
                    <img alt="" src={blogData.image}/>
                    <p>
                        {blogData.text}
                    </p>
                </div>
            )
        }
        )
    return blogDataList

}


export default BlogPostTeaser;