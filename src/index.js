import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/reset.css'
import './styles/index.css'
import Navbar from './components/Navbar'
import App from './App';
import Blog from './Blog'
import CreateBlog from './CreateBlog'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/blogs/:id'>
          <Blog />
        </Route>
        <Route path='/create'>
          <CreateBlog />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
