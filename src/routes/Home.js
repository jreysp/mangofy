import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo-white.png';
//THIS IS THE PAGE FOR LOGINS

function Home() {
    return (
        <div className="home">
            <img src={logo} className="logo-home"/>
            <h1>Welcome</h1>
            
            {/*Code for inputting the Username*/}
            <div className="Username">
            <input
                id="username" 
                placeholder= "USERNAME"
                type='text'
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

export default Home;