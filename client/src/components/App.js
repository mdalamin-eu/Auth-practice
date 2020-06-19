import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './Home/menu'
import Login from './auth/login/'
import Register from './auth/register/'
  
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Menu />
        <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
        </div>
        </Router>
    )
  }
}
export default App