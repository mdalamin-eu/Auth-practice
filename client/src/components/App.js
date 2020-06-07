import React, { Component } from 'react'
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Menu from './Home/menu'
import Login from './login/index'
  
 class App extends Component {
  render() {
    return (
     <Router>
       <Menu/>
       <Switch/>
       <Route exact path="/login">
         <Login/>
       </Route>
     </Router>
    )
  }
}
export default App