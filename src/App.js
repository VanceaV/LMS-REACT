import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateBook from './components/book/CreateBook'
import UpdateBook from './components/book/UpdateBook'
import Books from './components/book/Books'
import CreateAuthor from './components/author/CreateAuthor'
import UpdateAuthor from './components/author/UpdateAuthor'
import Authors from './components/author/Authors'

class App extends Component {
  render() {
    return (
     <Router>
       <div className='container'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link to={'/'} className ='navbar-brand'>Library Management System</Link>
       <div className='collapse navbar-collapse' id='navbarSupportedContent'>
       <ul className='navbar-nav mr-auto'>
       
       <li className='nav-item'>
       <Link to={'/Authors'} className = "nav-link">Authors</Link>
       </li>

       <li className='nav-item'>
       <Link to={'/Books'} className = "nav-link">Books</Link>
       </li>

       </ul>

       </div>

       </nav><br />

       <Switch>
         <Route  path ='/createBook' component={CreateBook} />
         <Route  path ='/updateBook/:id' component={UpdateBook} />
         <Route  path ='/books' component={Books} />
         <Route  path ='/createAuthor' component={CreateAuthor} />
         <Route  path = '/updateAuthor/:id' component={UpdateAuthor} />
         <Route  path ='/authors' component={Authors} />
       </Switch>

       </div>
     </Router>
    );
  }
}

export default App;
