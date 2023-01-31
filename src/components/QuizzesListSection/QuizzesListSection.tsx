import React, {useEffect, useState} from 'react';
import {QuestionDto} from "../../api/dto/questionDto";
import {QuizApi} from "../../api/quiz.api";
import {
    QuizzesListSectionContainer, QuizzesListSectionLink,
    QuizzesListSectionLinksContainer,
    QuizzesListSectionLinksItems,
    QuizzesListSectionLinksWrapper,
    QuizzesListSectionLinkTitle
} from "./QuizzesListSection.elements";

function QuizzesListSection(): JSX.Element {
    const [questions, setQuizzes] = useState<QuestionDto[]>([]);

    useEffect(() => {
        async function fetchAll() {
            const res = await QuizApi.getAll();

            setQuizzes(res);
        }

        fetchAll();
    }, []);

    return (
        <>
            <QuizzesListSectionContainer>
                <QuizzesListSectionLinksContainer>
                    <QuizzesListSectionLinksWrapper>
                        <QuizzesListSectionLinksItems>
                            <QuizzesListSectionLinkTitle>Choose a quiz from the list below and start testing your
                                English!</QuizzesListSectionLinkTitle>
                            <ul>
                                {
                                    questions
                                        .sort((a, b) => a.quizName.localeCompare(b.quizName))
                                        .map(quiz => {
                                            return <QuizzesListSectionLink to='/questions'>
                                                <li key={quiz.id}>{quiz.quizName}</li>
                                            </QuizzesListSectionLink>
                                        })
                                }
                            </ul>
                        </QuizzesListSectionLinksItems>
                    </QuizzesListSectionLinksWrapper>
                </QuizzesListSectionLinksContainer>
            </QuizzesListSectionContainer>
        </>
    );
}

export default QuizzesListSection;