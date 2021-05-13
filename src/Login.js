import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from './firebase'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = (e) =>{
        e.preventDefault();
        //some firebase login 
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            history.push("/")
        }).catch(error =>{
            alert(error.message);
        })

    }
    
    const register = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            //it successfully created a new user with eamil and password
            console.log(auth)
            if (auth){
                history.push('/');
            }
        }).catch(error =>{
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo.png" alt="" />
            </Link >

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} type="text"
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input value={password} type="password" 
                    onChange={e =>setPassword(e.target.value)} />

                    <button type ='submit' className="login_signInButton" onClick={signIn}>Sign In</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sales. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                 </p>
                <div className="divider">
                    <h5>New to Amazon?</h5>
                </div>
                <button onClick={register} className="login_registerButton">Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login
