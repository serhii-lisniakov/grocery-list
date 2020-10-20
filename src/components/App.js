import React from 'react';
import Header from './Header/Header'
import List from './List/List';

const App = () => (
  <div className='app'>
      <Header />
      <div className='container'>
        <List/>
      </div>
  </div>
);

export default App;
