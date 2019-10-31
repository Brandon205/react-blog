import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Homepage } from './Homepage';
import { MainBlog } from './MainBlog';
import { FavMovie } from './FavMovie';
import { FavFood } from './FavFood';
import { About } from './About';
import './App.css';

function App() {
  const movies = ['Movie1', 'Movie2', 'Movie3'];
  return (
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to='/mainblog'>MainBlog</Link>{' | '}
        <Link to="/favmovie">FavMovie</Link>{' | '}
        <Link to="/favfood/tacos">FavFood</Link>{' | '}
        <Link to="/about">About</Link>
      </nav>

      <Route exact path="/" component={Homepage} />
      <Route path="/mainblog" component={MainBlog} />
      <Route path="/favmovie" render={() => <FavMovie movies={movies} /> } />
      <Route path="/favfood/:id" render={(props) => <FavFood {...props} /> } />
      <Route path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
