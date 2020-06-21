import cookie from 'js-cookie'
import { Router } from 'react-router-dom'

export const setCookie  = (key,value) => {
    console.log(key,value)
    if(process.browser) {
      cookie.set(key, value, {
            expires:1
        })
    }

}

export const removeCookie = (key)=>{
    if(process.browser){
        cookie.remove(key)
    }
}

export const getCookie = key => {
       if(process.browser) {
        return cookie.get(key)

    }

}


export const setLocalStorage  = (key, value) => {
    if(process.browser) {
    localStorage.setItem(key, JSON.stringify(value))
    }

}

export const removeLocalStorage = key => {
    if(process.browser){
        localStorage.removeItem(key)
    }
}

export const  authenticate = (response, next) => {
    console.log(response.data)
    setCookie('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next()
}

export const isAuth = () => {
     if(process.browser) {
         const cookieChecked = getCookie('token')
         if(cookieChecked) {
             console.log(cookieChecked)
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            }
            else {
                return false
            }
         }
     }
}


export const logout = () => {
    removeCookie('token')
    removeLocalStorage('user')
    
}