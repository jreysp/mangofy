import React from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'
import logo from '../mangofy_logo-03.png';

function Home() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div className="home">
            { error && <Alert variant="danger">{error}</Alert>}
            <h1>Profile</h1>
            <h2>Email:</h2> {currentUser.email}
            <div>
                <button
                    onClick={handleLogout}
                    style={{
                        paddingLeft: "65px",
                        paddingRight: "65px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontFamily: "Mont Heavy",
                        color: "white",
                        backgroundColor: "orange",
                        marginBottom: "10px",
                    }} >
                    LOGOUT
                </button>
            </div>
            <h1>My Playlists</h1>
            <body>
                {/*Code for playlists goes here!*/}
            </body>
        </div>  
    );
}

export default Home;