import React, {useEffect, useState} from 'react';
import {QuestionDto} from "../../api/question/dto/question.dto";
import {QuestionApi} from "../../api/question/question.api";
import {
    QuestionsSectionContainer, QuestionsSectionLink,
    QuestionsSectionLinksContainer,
    QuestionsSectionLinksItems,
    QuestionsSectionLinksWrapper,
    QuestionsSectionLinkTitle
} from "./QuestionsSection.elements";

function QuestionsSection(): JSX.Element {
    const [questions, setQuestions] = useState<QuestionDto[]>([]);

    useEffect(() => {
        async function fetchOneQuizQuestions() {
            const res = await QuestionApi.getOneQuizQuestions();

            setQuestions(res);
        }

        fetchOneQuizQuestions();
    }, []);
    console.log(questions);

    return (
        <>
            <QuestionsSectionContainer>
                <QuestionsSectionLinksContainer>
                    <QuestionsSectionLinksWrapper>
                        <QuestionsSectionLinksItems>
                            <QuestionsSectionLinkTitle>Choose one correct option!</QuestionsSectionLinkTitle>
                            <ul>
                                {
                                    questions.map(question => {
                                        return <div>
                                            {/* return <QuestionsSectionLink to='/questions'>*/}
                                            <li key={question.questionCategory}>{question.question}</li>
                                            {/*  </QuestionsSectionLink>*/}
                                        </div>
                                    })
                                }
                            </ul>
                        </QuestionsSectionLinksItems>
                    </QuestionsSectionLinksWrapper>
                </QuestionsSectionLinksContainer>
            </QuestionsSectionContainer>
        </>
    );
}

export default QuestionsSection;