import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type ButtonProps = TouchableOpacityProps;

const ResendCodeButton: React.FC<ButtonProps> = ({ children }) => {
    return (
        <S.Button>
            <S.ButtonText>{children}</S.ButtonText>
        </S.Button>
    );
};

export default ResendCodeButton;
