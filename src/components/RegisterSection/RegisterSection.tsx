import React from 'react';
import {Button} from '../../globalStyles';
import {
    RegisterContainer,
    RegisterSubHeading,
    RegisterSubscription,
    RegisterSubText,
    Form,
    FormInput,
} from './RegisterSection.elements';
import {Props} from "../../types/Props";

const RegisterSection: React.FC<Props> = () => {
    return (
        <RegisterContainer>
            <RegisterSubscription>
                <RegisterSubHeading>
                    Register to become a quiz creator!
                </RegisterSubHeading>
                <RegisterSubText>
                    You can unregister at any time!
                </RegisterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email'/>
                    <Button fontBig>Register</Button>
                </Form>
            </RegisterSubscription>
        </RegisterContainer>
    );
};

export default RegisterSection;