import React from 'react'
import Login from './Login'
import Register from './Register'

//Authentication function
const Auth = () => {
  return (
    <div>
        <h1>Authentication Page</h1>
        <Login />
        <Register />
    </div>
  )
}

export default Auth