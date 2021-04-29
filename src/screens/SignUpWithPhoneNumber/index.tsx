import React from 'react';
import * as S from './styles';

const SignUpWithPhoneNumber: React.FC = () => {
    return (
        <S.Container>
            <S.Title>Mobile Number</S.Title>
            <S.SubTitle>
                Please enter your valid phone number. We will {'\n'}
                send you 4-digit code to verify account.
            </S.SubTitle>
        </S.Container>
    );
};

export default SignUpWithPhoneNumber;
