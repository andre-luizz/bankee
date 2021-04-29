import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { EButtonVariantProps } from '../../../interfaces/enums/button.enum';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    variant?: EButtonVariantProps;
}

const Button: React.FC<ButtonProps> = ({
    variant = EButtonVariantProps.PRIMARY,
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
