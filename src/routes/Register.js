import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <h1>Create a Mangofy Account</h1>

            <div
                style={{
                    paddingRight: "396px",
                    paddingBottom: "5px"
                }}
            >
                Username
            </div>

            {/*Code for inputting a Username*/}
            <div className="newUsername">
            <input
                id="newUser" 
                type='text'
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
                    paddingRight: "397px"
                }}
            >
                Password
            </div>

            <div className="newPassword">
            <input 
                id="newPass" 
                type='text'
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

        </div>

    );
}

export default Register;