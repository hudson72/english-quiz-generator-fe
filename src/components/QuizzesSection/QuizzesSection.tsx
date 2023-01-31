import React, {useEffect, useState} from 'react';
import {QuestionDto} from "../../api/dto/questionDto";
import {QuizApi} from "../../api/quiz.api";
import {
    QuizzesSectionContainer, QuizzesSectionLink,
    QuizzesSectionLinksContainer,
    QuizzesSectionLinksItems,
    QuizzesSectionLinksWrapper,
    QuizzesSectionLinkTitle
} from "./QuizzesSection.elements";

function QuizzesSection(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuestionDto[]>([]);

    useEffect(() => {
        async function fetchOne() {
            const res = await QuizApi.getOne();

            setQuizzes(res);
        }

        fetchOne();
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
                                    <p>oooopsi</p>
                                }
                            </ul>
                        </QuizzesSectionLinksItems>
                    </QuizzesSectionLinksWrapper>
                </QuizzesSectionLinksContainer>
            </QuizzesSectionContainer>
        </>
    );
}

export default QuizzesSection;