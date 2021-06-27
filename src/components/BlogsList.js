import { Link } from 'react-router-dom'

const BlogsList = ({ blogs }) => {
  return (
    <div className="blogs-list container">
      {(blogs.length === 0) ? <h1>No blogs for now :(</h1> : true }
      {blogs.map(blog => (
        <article className="blog-post" key={blog.id}>
            <h1 className="blog-title">
              <Link to={`blogs/${blog.id}`}>
                { blog.title }
              </Link>
            </h1>
            <p className="blog-content">
              { blog.content.slice(0, 150) + '...' }
            </p>
        </article>
      ))}
    </div>
  );
}

export default BlogsList;