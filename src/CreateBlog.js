import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { APIServerURL } from './configs'

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const history = useHistory()

  const createBlog = (e) => {
    e.preventDefault()

    const blog = {title, content, author, date: new Date(Date.now()).toDateString()}
    fetch(`${APIServerURL}/blogs/`, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(blog)
    })
    .then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-create container">
      <h1>Create Blog</h1>
      <form onSubmit={createBlog}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Blog Title" />
        <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Blog Content"></textarea>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Blog Author" />
        <button type="submit" className="btn">Create</button>
      </form>
    </div>
  );
}
 
export default CreateBlog;