import React from 'react';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import accountCreatedImg from '../../assets/screens/accountCreated/account-created-img.png';
import * as S from './styles';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';

const AccountCreated: React.FC = () => {
    return (
        <S.Container>
            <S.Image source={accountCreatedImg} />

            <Title>Account Created!</Title>

            <Title variant={ETitleVariantProps.SECONDARY}>
                Dear user your account has been created successfully. Continue
                to start using app
            </Title>

            <Button style={{ marginTop: 130 }}>Continue</Button>

            <Title variant={ETitleVariantProps.SECONDARY}>
                by clicking start, you agree to our Privacy Policy our Teams and
                Conditions
            </Title>
        </S.Container>
    );
};

export default AccountCreated;
