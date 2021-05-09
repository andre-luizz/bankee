import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    ...rest
}) => {
    return (
        <S.Button variant={variant} {...rest}>
            <S.ButtonText variant={variant}>{children}</S.ButtonText>
        </S.Button>
    );
};

export default Button;
