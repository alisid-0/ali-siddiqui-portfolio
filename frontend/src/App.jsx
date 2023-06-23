import { useState, createContext, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const LoginContext = createContext(null);


function App() {
  const [user, setUser] = useState({});
  const [signedIn, setSignedIn] = useState(false);

  useEffect(()=>{
    console.log(user);
  }, [user]);

  return (
    <LoginContext.Provider value={{user,setUser,signedIn,setSignedIn}}>
      <Router>
        <Header/>
        <Routes>  
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
