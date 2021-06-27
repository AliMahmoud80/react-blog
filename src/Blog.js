import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { APIServerURL } from './configs'

const Blog = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState()
  const history = useHistory()
  
  const deleteBlog = () => {
    fetch(`${APIServerURL}/blogs/${id}`, {
      method: 'DELETE'
    })
    .then(() => history.push('/'))
  }

  useEffect(() => {
    fetch(`${APIServerURL}/blogs/${id}`)
      .then(res => res.json())
      .then(blog => {
        setBlog(blog)
      })
      .catch(err => {
        history.push('/')
      })
  }, [id, history])

  return (
    <div className="blog-details container">
    {blog && (
      <div className="blog-post">
        <div className="blog-header">
          <h1 className="blog-title">
            { blog.title }
          </h1>
          <button className="btn btn-danger" onClick={deleteBlog}>Delete</button>
        </div>
        <p className="blog-content">
          { blog.content }
        </p>
        <div className="blog-footer">
          <p>Author: { blog.author }</p>
          <p>Date: { blog.date }</p>
        </div>
      </div>
    )}
    </div>
  );
}
 
export default Blog;