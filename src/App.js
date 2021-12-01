import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import Login from './routes/Login.js'
import Search from './routes/Search.js'
import MyPlaylist from './routes/MyPlaylist.js'
import Daily from './routes/Daily.js'
import PrivateRoute from './components/PrivateRoute.js'
import { AuthProvider } from './contexts/AuthContext'
import './App.css';

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
          <Route path="/search" element={<PrivateRoute/>}>
              <Route path="/search" element={<Search/>}/>
          </Route>
          <Route path="/myplaylist" element={<MyPlaylist />} />
          <Route path="/daily" element={<Daily />} />
        </Routes>
      </AuthProvider>
   </BrowserRouter>
   </div>
  );
}

export default App;
