import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import Login from './routes/Login.js'
import Search from './routes/Search.js'
import PrivateRoute from './components/PrivateRoute.js'
import { AuthProvider } from './contexts/AuthContext'
import './App.css';


//var cur_song = all_songs.search_songs("Classical");
//var cur_song = all_songs.search_songs_name("Levitating");

console.log("FROM APP.JS");
//console.log(cur_song);

function App() {
  return (
   <div>
   <BrowserRouter>
      <NavBar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute/>}>
              <Route path="/" element={<Home/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AuthProvider>
   </BrowserRouter>
   </div>
  );
}

export default App;
