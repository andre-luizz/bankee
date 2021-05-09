import React from 'react';
import { TextProps } from 'react-native';
import * as S from './styles';

interface TitleProps extends TextProps {
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Title: React.FC<TitleProps> = ({
    variant = 'primary',
    children,
    ...rest
}) => {
    return (
        <S.Title variant={variant} {...rest}>
            {children}
        </S.Title>
    );
};

export default Title;
