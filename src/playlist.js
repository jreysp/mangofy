
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext.js'
import { AuthProvider } from './contexts/AuthContext.js';
import {dB, FieldValue} from "./firebase.js"

/*function getUserPlaylist(currentUser, song){
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        dB.collection('users').get().then((snapshot) => {
          setUserData(snapshot.docs.map((doc) => doc.data()));
        });
    
        dB.collection('users').onSnapshot((snapshot) => {
          setUserData(snapshot.docs.map((doc) => doc.data()));
        });
    
      }, []);
}*/

export default class Playlist{
    constructor(){}
    
    async addSongToPlaylist(currentUserID, song){
        //console.log("Auth", AuthProvider);
        //console.log("UID",currentUser.uid);
        //console.log("SONG",song);
        //console.log(dB);
        //var getUserPlaylist = getUserPlaylist(currentUser, song);
        //console.log(getUserPlaylist);
        var ref = dB.collection('users').doc(currentUserID)
        //ref.set(
        console.log("Adding song", song);
        const unionRes = await ref.update(
        {
            //Playlist: {song}
            
            Playlist: FieldValue.arrayUnion({song})
        });
    }
    async removeSongFromPlaylist(currentUserID, song){
        var ref = dB.collection('users').doc(currentUserID)
        console.log("Adding song", song);
        const unionRes = await ref.update(
        {
            Playlist: FieldValue.arrayRemove({song})
        });
    }
    
}

