import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import MyProfile from './components/pages/MyProfile'
import MyApointements from './components/pages/MyApointements'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            <Route path={'/MyProfile'} component={MyProfile}></Route>
            <Route path={'/MyApointements'} component={MyApointements}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
