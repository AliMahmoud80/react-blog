import { useState, useEffect } from 'react'
import BlogsList from './components/BlogsList'
import { APIServerURL } from './configs'

function App() {
  const [blogs, setBlogs] = useState()

  useEffect(() => {
    fetch(`${APIServerURL}/blogs`)
      .then(res => res.json())
      .then(blogs => {
        setBlogs(blogs)
      })
  }, [])

  return (
    <div className="App">
      {blogs && <BlogsList blogs={blogs} />}
    </div>
  );
}

export default App;
