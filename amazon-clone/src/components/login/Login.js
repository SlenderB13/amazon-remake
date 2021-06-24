import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import './Login.css'
import logo from '../../amazon-logo.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase/firebase'

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push('/')
        }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/" >
                <img src={logo} className="login__cardLogo" />
            </Link>
            <div className="login__card">
                <h1>Sign <strong>In</strong></h1>
                <form className="login__cardForm">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail"></input>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                    <Button onClick={signIn} className="login__cardBtn" type="submit">Enter</Button>
                </form>
            </div>
            <h2 className="login__cardIntro"><Link onClick={register}>
                <strong>Register</strong>
            </Link> and enjoy our <strong>thousands</strong> of products. <strong>;)</strong></h2>
        </div>
    )
}

export default Login
