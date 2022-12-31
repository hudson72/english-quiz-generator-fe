import React, {useEffect, useState} from 'react';
import {Button} from '../../globalStyles';
import {Props} from "../../types/Props";
import {QuizDto} from "../../api/dto/quiz.dto";
import {QuizApi} from "../../api/quiz.api";
import {
    QuizzesSectionContainer, QuizzesSectionLink,
    QuizzesSectionLinksContainer,
    QuizzesSectionLinksItems,
    QuizzesSectionLinksWrapper,
    QuizzesSectionLinkTitle
} from "./QuizzesSection.elements";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

function QuizzesSection(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizDto[]>([]);

    useEffect(() => {
        async function fetchAll() {
            const res = await QuizApi.getAll();

            setQuizzes(res);
        }

        fetchAll();
    }, []);

    return (
        <>
            <QuizzesSectionContainer>
                <QuizzesSectionLinksContainer>
                    <QuizzesSectionLinksWrapper>
                        <QuizzesSectionLinksItems>
                            <QuizzesSectionLinkTitle>Choose a quiz from the list below and start testing your
                                English!</QuizzesSectionLinkTitle>
                            <ul>
                                {
                                    quizzes.map(quiz => {
                                        return <QuizzesSectionLink to='/register'>
                                            <li key={quiz.id}>{quiz.quizName}</li>
                                        </QuizzesSectionLink>
                                    })
                                }
                            </ul>
                        </QuizzesSectionLinksItems>
                    </QuizzesSectionLinksWrapper>
                </QuizzesSectionLinksContainer>
            </QuizzesSectionContainer>
        </>
    );
};

export default QuizzesSection;