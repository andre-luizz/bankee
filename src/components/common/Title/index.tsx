import React from 'react';
import { TextProps } from 'react-native';
import { ETitleVariantProps } from '../../../interfaces/enums/title.enum';
import * as S from './styles';

interface TitleProps extends TextProps {
    variant?: ETitleVariantProps;
}

const Title: React.FC<TitleProps> = ({
    variant = ETitleVariantProps.PRIMARY,
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
