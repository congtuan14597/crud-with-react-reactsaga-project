import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import Signup from './components/Signup';
import CreateFormik from './components/CreateFormik';
import FormikForm from './components/EditFormik';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-app">
          <Header></Header>
        </div>
        <Switch>
          <Route exact path="/">
            <Index></Index>
          </Route>
          <Route path="/create">
            <CreateFormik></CreateFormik>
          </Route>
          <Route exact path="/interns">
            <Index></Index>
          </Route>
          <Route path="/edit/:id" render={props => <FormikForm {...props} {...this.props} />}></Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
