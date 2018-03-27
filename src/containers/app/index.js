import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Login from '../Login';

import ButtonAppBar from '../Navbar';
import AdminPanel from '../AdminPanel';

const App = () => (
  <div>
    <header>
      <ButtonAppBar />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/admin" component={AdminPanel} />
    </main>
  </div>
);

export default App;
