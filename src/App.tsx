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
import {QuestionDto} from './api/dto/questionDto';
import QuizzesList from "./pages/QuizzesList/QuizzesList";
import Quizzes from "./pages/Quizzes/Quizzes";

function App() {
    const [questions, setQuizzes] = useState<QuestionDto[]>([]);

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
                <Route path='/questions-list' element={<QuizzesList/>}/>
                <Route path='/questions' element={<Quizzes/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
