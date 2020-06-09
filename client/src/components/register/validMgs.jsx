import React from 'react'

const validMgs = (props) =>{
    if(!props.valid){
        return(
            <div className= 'error-mgs'>{props.message}</div>
        )
    }
    return null;

}

export default validMgs;