import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from './pages/HomePage/Home';
import {Navbar, Footer} from "./components";
import Student from './pages/Student/Student';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {QuizApi} from './api/quiz/quiz.api';
import {QuizDto} from './api/quiz/dto/quiz.dto';
import QuizzesList from "./pages/QuizzesList/QuizzesList";
import Quizzes from "./pages/Quizzes/Quizzes";
import {QuestionApi} from './api/question/question.api';
import {QuestionDto} from "./api/question/dto/question.dto";
import Questions from "./pages/Questions/Questions";

function App() {
    const [quizzes, setQuizzes] = useState<QuizDto[]>([]);
    const [questions, setQuestions] = useState<QuestionDto[]>([]);

    useEffect(() => {
        async function fetchAll() {
            const res = await QuizApi.getAll();

            setQuizzes(res);
        }

        async function fetchOneQuizQuestions() {
            const res = await QuestionApi.getOneQuizQuestions();

            setQuestions(res);
        }

        fetchAll();
        fetchOneQuizQuestions();
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
                <Route path='/quizzes' element={<Quizzes/>}/>
                <Route path='/questions' element={<Questions/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
