import React from 'react'
import { Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'
import logo from '../logo-white.png';
//THIS IS THE PAGE FOR LOGINS

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)

    }

    return (
        <div className="login">
            <img src={logo} className="logo-login"/>
            <h1>Welcome</h1>

            {error && <Alert variant="danger">{error}</Alert>}
            
            {/*Code for inputting the Username*/}
            <div className="Username">
            <input
                id="username" 
                placeholder= "USERNAME"
                type='text'
                ref={emailRef} required
                style={{
                    paddingLeft: "15px",
                    paddingRight: "70px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "Mont Heavy",
                    color: "orangered",
                    marginBottom: "10px"
                }}
            />
            </div>

            {/*Code for inputting the Password*/}
            <div className="Password">
            <input 
                id="password" 
                placeholder="PASSWORD"
                type='text'
                ref = {passwordRef} required
                style={{
                    paddingLeft: "15px",
                    paddingRight: "70px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "Mont Heavy",
                    color: "orangered",
                    marginBottom: "20px",
                }}  
            />
            </div>

            {/*Code for Login button*/}
            <button
                onClick={handleSubmit}
                style={{
                    paddingLeft: "65px",
                    paddingRight: "65px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "Mont Heavy",
                    color: "white",
                    backgroundColor: "orange",
                    marginBottom: "10px",
                }} 
            >
                LOGIN
            </button>

            <div><Link to="/register">Click Here to Register</Link></div>
        </div>
    );
}

export default Login;