import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import * as S from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const ForgotPasswordButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <S.Button {...rest}>
            <S.ButtonText>{children}</S.ButtonText>
        </S.Button>
    );
};

export default ForgotPasswordButton;
