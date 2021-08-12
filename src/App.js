import React, { useState } from 'react';
import './App.css';

import { Link, Route } from 'wouter';

function App() {

  const [keyword, setKeyword] = useState('panda');

  return (
    <div className="App">
      <section className="App-content">
        <Link>
          <img className="App-logo" alt='Giffy logo' src="logo.png" />
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
          
      </section>
    </div>
  );
}

export default App;

