import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'
import { Alert } from 'react-bootstrap'

function Register() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const photoRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value, photoRef.current.value)
        } catch {
            setError("Failed to create an account")
        }
        setLoading(false)

    }

    async function handleChange() {

    }

    return (
        <div className="register">
            <h1>Register</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <div
                style={{
                    paddingRight: "422px",
                    paddingBottom: "5px"
                }}
            >
                Email
            </div>

            {/*Code for inputting a Username*/}
            <div className="newUsername">
            <input
                id="newUser" 
                type='text'
                ref={emailRef} required
                style={{
                    paddingLeft: "10px",
                    paddingRight: "280px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Helmet",
                    color: "black",
                    marginBottom: "20px"
                }}
            />
            </div>

            {/*Code for inputting a Password*/}

            <div
                style={{
                    paddingRight: "392px",
                    paddingBottom: "5px"
                }}
            >
                Password
            </div>

            <div className="newPassword">
            <input 
                id="newPass" 
                type='password'
                ref = {passwordRef} required
                style={{
                    paddingLeft: "10px",
                    paddingRight: "280px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Helmet",
                    color: "black",
                    marginBottom: "30px"
                }}  
            />
            </div>

            <div
                style={{
                    paddingRight: "388px",
                    paddingBottom: "5px"
                }}
            >
                Photo URL
            </div>

            <div>
                <input
                    ref={photoRef}
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "280px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontSize: "16px",
                        fontFamily: "Helmet",
                        color: "black",
                        marginBottom: "30px"
                    }}
                />
            </div>

            {/*Code for the button to create a new account*/}
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
                Create Account
            </button>

            <div><Link to="/login">Click Here to Login</Link></div>
        </div>

    );
}

export default Register;