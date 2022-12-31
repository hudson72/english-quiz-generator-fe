import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from './pages/HomePage/Home';
import {Navbar, Footer} from "./components";
import Student from './pages/Student/Student';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {QuizApi} from './api/quiz.api';
import {QuizDto} from './api/dto/quiz.dto';
import QuizzesList from "./pages/QuizzesList/QuizzesList";

function App() {
    const [quizzes, setQuizzes] = useState<QuizDto[]>([]);

    useEffect(() => {
        async function fetchAll() {
            const res = await QuizApi.getAll();

            setQuizzes(res);
        }

        fetchAll();
    }, []);

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
                <Route path='/quizzes-list' element={<QuizzesList/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
