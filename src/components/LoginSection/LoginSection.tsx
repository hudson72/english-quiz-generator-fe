import React from 'react';
import {Button} from '../../globalStyles';
import {
 LoginContainer,
 LoginSubHeading,
 LoginSubscription,
 Form,
 FormInput,
} from './LoginSection.elements';

const LoginSection = () => {
 return (
  <>
   <LoginContainer>
    <LoginSubscription>
     <LoginSubHeading>
      Log in to create, update and search for quizzes!
     </LoginSubHeading>
     <Form>
      <FormInput name='email' type='email' placeholder='Your Email'/>
      <FormInput name='password' type='password' placeholder='Your Password'/>
      <Button fontBig>Log in</Button>
     </Form>
    </LoginSubscription>
   </LoginContainer>
  </>
 );
};

export default LoginSection;