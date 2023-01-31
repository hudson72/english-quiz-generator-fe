import React from "react";
import {Link} from 'react-router-dom';
import {Button, Container} from '../../globalStyles';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
} from './InfoSectionStudent.elements';
import {Props} from "../../types/Props";

// Code snippet to create a Stateless React Component without PropTypes: rsc

const InfoSectionStudent: React.FC<Props> = ({
                                                 lightBg,
                                                 imgStart,
                                                 lightTopLine,
                                                 lightTextDesc,
                                                 buttonLabel,
                                                 description,
                                                 headline,
                                                 lightText,
                                                 primary,
                                                 topLine,
                                                 img,
                                                 alt,
                                                 start,
                                             }) => {

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/questions-list'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={require('../../media/quizStudent.svg').default} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSectionStudent;
