import React, { Component } from 'react'
import Axios from 'axios'

class Activate extends Component {
    componentDidMount() {
      
    }
       activate = (event) =>{
        event.preventDefault()
        const token = this.props.match.params.id
 console.log(token)
         Axios.post(`http://localhost:3000/api/v1/user/activate`,{ token})
         .then(response=>{
             console.log(response.data);
         })
 
     }

    render() {

   

        return (
            <div className="App">
            <header>
                Login Form
            </header>
            
            <form onSubmit={this.activate}>
           
                <input type="submit" value="Submit"/>

            </form>
            
        </div>
        )
    }
}
export default  Activate

