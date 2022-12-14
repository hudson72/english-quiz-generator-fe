import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from './pages/HomePage/Home';
import {Navbar, Footer} from "./components";
import Student from './pages/Student/Student';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
 return (
  // eslint-disable-next-line react/jsx-filename-extension
  <Router>
   <GlobalStyle/>
   <ScrollToTop/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/student' element={<Student/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   <Footer/>
  </Router>
 );
}

export default App;
