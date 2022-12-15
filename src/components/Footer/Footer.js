import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
 FooterContainer,
 FooterLinksContainer,
 FooterLinksWrapper,
 FooterLinkTitle,
 FooterLinksItems,
 FooterLink,
 SocialMedia,
 SocialMediaWrap,
 SocialLogo,
 SocialIcon,
 SocialIcons,
 SocialIconLink,
 WebsiteRights,
} from './Footer.elements';

const Footer = () => {
 return (
  <FooterContainer>
   <FooterLinksContainer>
    <FooterLinksWrapper>
     <FooterLinksItems>
      <FooterLinkTitle>About Us</FooterLinkTitle>
      <FooterLink to='/register'>How it works</FooterLink>
      <FooterLink to='/'>Testimonials</FooterLink>
      <FooterLink to='/'>Careers</FooterLink>
      <FooterLink to='/'>Terms of service</FooterLink>
     </FooterLinksItems>
     <FooterLinksItems>
      <FooterLinkTitle>Contact Us</FooterLinkTitle>
      <FooterLink to='/register'>How it works</FooterLink>
      <FooterLink to='/'>Testimonials</FooterLink>
      <FooterLink to='/'>Careers</FooterLink>
      <FooterLink to='/'>Terms of service</FooterLink>
     </FooterLinksItems>
    </FooterLinksWrapper>
    <FooterLinksWrapper>
     <FooterLinksItems>
      <FooterLinkTitle>Videos</FooterLinkTitle>
      <FooterLink to='/register'>How it works</FooterLink>
      <FooterLink to='/'>Testimonials</FooterLink>
      <FooterLink to='/'>Careers</FooterLink>
      <FooterLink to='/'>Terms of service</FooterLink>
     </FooterLinksItems>
     <FooterLinksItems>
      <FooterLinkTitle>Social Media</FooterLinkTitle>
      <FooterLink to='/register'>How it works</FooterLink>
      <FooterLink to='/'>Testimonials</FooterLink>
      <FooterLink to='/'>Careers</FooterLink>
      <FooterLink to='/'>Terms of service</FooterLink>
     </FooterLinksItems>
    </FooterLinksWrapper>
   </FooterLinksContainer>
   <SocialMedia>
    <SocialMediaWrap>
     <SocialLogo to='/'>
      <SocialIcon/>
      EQG
     </SocialLogo>
     <WebsiteRights>
      EQG 2022
     </WebsiteRights>
     <SocialIcons>
      <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
       <FaFacebook/>
      </SocialIconLink>
      <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
       <FaInstagram/>
      </SocialIconLink>
      <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
       <FaYoutube/>
      </SocialIconLink>
      <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
       <FaTwitter/>
      </SocialIconLink>
      <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
       <FaLinkedin/>
      </SocialIconLink>
     </SocialIcons>
    </SocialMediaWrap>
   </SocialMedia>
  </FooterContainer>
 );
};

export default Footer;