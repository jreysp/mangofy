import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import 'firebase/compat/firestore';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';

function EditProfile() {

    const [pic_url, setURL] = useState([]); 
    const { currentUser } = useAuth();
    const photoRef = useRef();
    const navigate = useNavigate()

    useEffect(() => {
        if (typeof pic_url !== undefined)
        {
            app.firestore().collection('users').doc(currentUser.uid)
            .collection('Photo')
            .get().then((snapshot) => {
              setURL(snapshot.docs.map((doc) => doc.data()));
            });
        
            app.firestore().collection('users').doc(currentUser.uid)
            .collection('Photo').onSnapshot((snapshot) => {
              setURL(snapshot.docs.map((doc) => doc.data()));
            });
        }
       
      }, []);

    async function handleSubmit(e) {
        e.preventDefault()

        if(photoRef.current.value === "") {
            return;
        }

        clear();
        var URL_obj = {
            picture_url: photoRef.current.value
        }
        console.log("URL_obj", URL_obj);
        const hello = await app.firestore().collection('users').doc(currentUser.uid).collection('Photo').add(URL_obj);
        
        navigate("/")
    }

    function clear(){
        var ref = app.firestore().collection('users').doc(currentUser.uid).collection('Photo')
        
        ref.get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                doc.ref.delete()
            });
        });
    }

    return (
        <div className="edit_profile">
            <h1> Edit Profile </h1>
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
                Save Changes
            </button>
        </div>
    );

}

export default EditProfile;