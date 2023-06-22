import { useState, createContext, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

export const LoginContext = createContext(null);

function MainRoutes() {
  const location = useLocation();

  const getBackgroundClass = () => {
    switch(location.pathname) {
      case '/':
        return 'bg-home';
      case '/login':
        return 'bg-blank';
      case '/contact':
        return 'bg-blank';
      default:
        return 'bg-home';
    }
  };

  return (
    <div className={getBackgroundClass()}>
      <Header />
      <Routes>  
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

function App() {
  const [user, setUser] = useState({});
  const [signedIn, setSignedIn] = useState(false);

  useEffect(()=>{
    console.log(user);
  }, [user]);

  return (
    <LoginContext.Provider value={{user,setUser,signedIn,setSignedIn}}>
      <Router>
        <MainRoutes />
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
