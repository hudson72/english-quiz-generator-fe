import React from 'react';
import {
    QuizzesContainer,
    QuizzesLinksContainer,
    QuizzesLinksWrapper,
    QuizzesLinkTitle,
    QuizzesLinksItems,
    QuizzesLink,
} from './Quizzes.elements';

const Quizzes = () => {
    return (
        <QuizzesContainer>
            <QuizzesLinksContainer>
                <QuizzesLinksWrapper>
                    <QuizzesLinksItems>
                        <QuizzesLinkTitle>About Us</QuizzesLinkTitle>
                        <QuizzesLink to='/register'>How it works</QuizzesLink>
                        <QuizzesLink to='/'>Testimonials</QuizzesLink>
                        <QuizzesLink to='/'>Careers</QuizzesLink>
                        <QuizzesLink to='/'>Terms of service</QuizzesLink>
                    </QuizzesLinksItems>
                    <QuizzesLinksItems>
                        <QuizzesLinkTitle>Contact Us</QuizzesLinkTitle>
                        <QuizzesLink to='/register'>How it works</QuizzesLink>
                        <QuizzesLink to='/'>Testimonials</QuizzesLink>
                        <QuizzesLink to='/'>Careers</QuizzesLink>
                        <QuizzesLink to='/'>Terms of service</QuizzesLink>
                    </QuizzesLinksItems>
                </QuizzesLinksWrapper>
                <QuizzesLinksWrapper>
                    <QuizzesLinksItems>
                        <QuizzesLinkTitle>Videos</QuizzesLinkTitle>
                        <QuizzesLink to='/register'>How it works</QuizzesLink>
                        <QuizzesLink to='/'>Testimonials</QuizzesLink>
                        <QuizzesLink to='/'>Careers</QuizzesLink>
                        <QuizzesLink to='/'>Terms of service</QuizzesLink>
                    </QuizzesLinksItems>
                    <QuizzesLinksItems>
                        <QuizzesLinkTitle>Social Media</QuizzesLinkTitle>
                        <QuizzesLink to='/register'>How it works</QuizzesLink>
                        <QuizzesLink to='/'>Testimonials</QuizzesLink>
                        <QuizzesLink to='/'>Careers</QuizzesLink>
                        <QuizzesLink to='/'>Terms of service</QuizzesLink>
                    </QuizzesLinksItems>
                </QuizzesLinksWrapper>
            </QuizzesLinksContainer>
            {/*<SocialMedia>*/}
            {/*    <SocialMediaWrap>*/}
            {/*        <SocialLogo to='/'>*/}
            {/*            <SocialIcon/>*/}
            {/*            EQG*/}
            {/*        </SocialLogo>*/}
            {/*        <WebsiteRights>*/}
            {/*            EQG 2022*/}
            {/*        </WebsiteRights>*/}
            {/*        <SocialIcons>*/}
            {/*            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>*/}
            {/*                <FaFacebook/>*/}
            {/*            </SocialIconLink>*/}
            {/*            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>*/}
            {/*                <FaInstagram/>*/}
            {/*            </SocialIconLink>*/}
            {/*            <SocialIconLink href='/' target='_blank' aria-label='Youtube'>*/}
            {/*                <FaYoutube/>*/}
            {/*            </SocialIconLink>*/}
            {/*            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>*/}
            {/*                <FaTwitter/>*/}
            {/*            </SocialIconLink>*/}
            {/*            <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>*/}
            {/*                <FaLinkedin/>*/}
            {/*            </SocialIconLink>*/}
            {/*        </SocialIcons>*/}
            {/*    </SocialMediaWrap>*/}
            {/*</SocialMedia>*/}
        </QuizzesContainer>
    );
};

export default Quizzes;