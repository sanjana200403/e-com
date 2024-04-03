import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './login.css'
import { auth } from './firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {
  const history = useHistory()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((auth)=>{
history.push('/')
console.log(email.slice(0,1))
    }).catch(err=>alert(err.message))
  }

  const register = e =>{
    e.preventDefault();
    auth.
    createUserWithEmailAndPassword(email,password).then((auth)=>{
      if(auth){

        
        history.push('/')
      }
    }).catch(err=>alert(err.message))
  }
  return (
    <div className='login'>
      <div className="login-main">
        
      <Link to="/">
<div className="login_log">
  <img src="https://www.gartner.com/pi/vendorimages/cora-systems_project-portfolio-management-worldwide_1627042717398.png" width="100px" alt="" />

  
  </div>      
      </Link>
      <div className="login-container">
        <h1 className='sign-up'>Sing Up</h1>
        <form action="">
          <h5>
            E-mail
          </h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" 
          value={password}
          onChange={e=>setPassword(e.target.value)}
          />
          <div>

          <button type="button" className='login_signInButton' onClick={signIn}>Sign In</button>
          </div>
        </form>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere tenetur consequuntur iure dolor nesciunt corporis blanditiis veritatis deserunt dignissimos nulla?</p>
        <button className='login_registrationButton' 
        onClick={register}
        > Create your eShop Account</button>

      </div>

      </div>
    
    </div>
  )
}

export default Login
