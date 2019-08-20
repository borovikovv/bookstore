import React from 'react';
import Header from '../header';
import ShoppingCartTable from '../shopping-cart-table';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={210} />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />
        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
      <ShoppingCartTable />
    </main>
  );
};

export default App;
