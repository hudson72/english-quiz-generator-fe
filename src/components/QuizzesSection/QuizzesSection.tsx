import React, {useEffect, useState} from 'react';
import {QuizDto} from "../../api/dto/quiz.dto";
import {QuizApi} from "../../api/quiz.api";
import {
    QuizzesSectionContainer, QuizzesSectionLink,
    QuizzesSectionLinksContainer,
    QuizzesSectionLinksItems,
    QuizzesSectionLinksWrapper,
    QuizzesSectionLinkTitle
} from "./QuizzesSection.elements";

function QuizzesSection(): JSX.Element {
    const [quizzes, setQuizzes] = useState<QuizDto[]>([]);

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
                                    // quizzes.find(quiz => {
                                    //     return <QuizzesSectionLink to='/quizzes'>
                                    //         <li key={quiz.id}>{quiz.quizName}</li>
                                    //     </QuizzesSectionLink>
                                    // })
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