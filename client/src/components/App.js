import React, { Component } from 'react'
import{ BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Menu from './Home/menu'
import Login from './login/index'
import Register from './register/index'
  
 class App extends Component {
  render() {
    return (
     <Router>
       <Menu/>
       <Switch/>
       <Route exact path="/login">
         <Login/>
         </Route>
       <Route exact path ="/Register">
           <Register/>
         </Route>
     </Router>
    )
  }
}
export default App