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
        async function fetchOne() {
            const res = await QuestionApi.getOne();

            setQuestions(res);
        }

        fetchOne();
    }, []);

    return (
        <>
            <QuestionsSectionContainer>
                <QuestionsSectionLinksContainer>
                    <QuestionsSectionLinksWrapper>
                        <QuestionsSectionLinksItems>
                            <QuestionsSectionLinkTitle>Choose a quiz from the list below and start testing your
                                English!</QuestionsSectionLinkTitle>
                            <ul>
                     
                            </ul>
                        </QuestionsSectionLinksItems>
                    </QuestionsSectionLinksWrapper>
                </QuestionsSectionLinksContainer>
            </QuestionsSectionContainer>
        </>
    );
}

export default QuestionsSection;