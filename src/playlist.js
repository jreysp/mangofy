
import {dB, FieldValue, snapshot} from "./firebase.js"

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
        //console.log("Adding song", song);
        
        const unionRes = await ref.update(
        {
            //Playlist: {song}
            Playlist: FieldValue.arrayUnion(song)
        });
    }
    async removeSongFromPlaylist(currentUserID, song){
        var ref = dB.collection('users').doc(currentUserID)
        console.log("Removing song", song);
        const unionRes = await ref.update(
        {
            Playlist: FieldValue.arrayRemove(song)
        });
    }
    async getTotalSongListPromise()
    {
        const ref = await dB.collection('songs');
        console.log("REF: ", ref.get());
        const result = ref.get().then((querySnapshot) => {
            const res = querySnapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
            //console.log(res);
            return res;
        });
        
        //USE THIS LINE OF CODE RIGHT BELOW TO PROCES THE PROMISE THAT IS RETURNED
        //result.then((result) => {console.log(result)})
        //the value of result can only be used from inside this line of code
        
        return result;
        
        //return result.docs.map((doc) => doc.data());
    }

    async addSongToPlaylist2(currentUserID, song) {
        var ref = dB.collection('users').doc(currentUserID).collection('Playlist')

        console.log('Adding song')
        console.log(song)

        const res = await ref.add(song)
    }

    async removeSongFromPlaylist2(currentUserID, name) {
        console.log('Removing song')
        console.log(name)
        var ref = dB.collection('users').doc(currentUserID).collection('Playlist')

        const query = ref.where('name', '==', name)
        query.get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                doc.ref.delete()
            });
        });
    };
    
}

