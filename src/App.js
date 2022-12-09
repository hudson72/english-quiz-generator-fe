import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from './pages/HomePage/Home';
import {Navbar, Footer} from "./components";
import Student from './pages/Student/Student';
import Teacher from './pages/Teacher/Teacher';
import SignIn from './pages/SignIn/SignIn';
import ScrollToTop from './components/ScrollToTop';

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
    <Route path='/teacher' element={<Teacher/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
   </Routes>
   <Footer/>
  </Router>
 );
}

export default App;
