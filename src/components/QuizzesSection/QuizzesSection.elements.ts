import styled from 'styled-components';
import {Link} from "react-router-dom";

export const QuizzesSectionContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const LoginSubscription = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   margin-bottom: 24px;
//   padding: 24px;
//   color: #fff;
// `;

export const QuizzesSectionSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const QuizzesSectionSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;
//
// export const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//
//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//     width: 80%;
//   }
// `;
//
// export const FormInput = styled.input`
//   padding: 10px 20px;
//   border-radius: 2px;
//   margin-right: 10px;
//   outline: none;
//   font-size: 16px;
//   border: 1px solid #fff;
//
//   &::placeholder {
//     color: #242424;
//   }
//
//   @media screen and (max-width: 820px) {
//     width: 100%;
//     margin: 0 0 16px 0;
//   }
// `;

export const QuizzesSectionLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  };
`;

export const QuizzesSectionLinksWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  };
`;

export const QuizzesSectionLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  };
`;

export const QuizzesSectionLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const QuizzesSectionLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: deepskyblue;
    transition: 0.3s ease-out;
  }
;
`;
