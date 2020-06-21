import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './Home/menu'
import Login from './auth/login/'
import Register from './auth/register/'
import ActivatePage from './auth/activate/activatepage'
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Menu />
        <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/auth/activate/:id" component={ActivatePage} />
        </div>
        </Router>
    )
  }
}
export default App