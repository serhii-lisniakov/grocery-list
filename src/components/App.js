import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header/Header'
import Page from './page/Page'

function App() {
  return (
    <>
        <Router basename={'/grocery-list'}>
          <Header />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/list"/>}/>
                <Route path={'/list'} render={() => <Page class='page page-list'/>} />
                <Route path={'/entries'} render={() => <Page class='page page-entries'/>} />
                <Route render={() => <Page class='page page-error'/>} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
