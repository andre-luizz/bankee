import styled, { css } from 'styled-components/native';
import { ETitleVariantProps } from '../../../interfaces/enums/title.enum';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

interface TitleProps {
    variant: ETitleVariantProps;
}

export const Title = styled.Text<TitleProps>`
    font-family: ${fonts.title};
    font-size: 35px;
    color: ${colors.title};
    line-height: 46px;

    ${props =>
        props.variant === 'SECONDARY' &&
        css`
            font-family: ${fonts.body};
            font-size: 15px;
            color: ${colors.body};
            margin-top: 21px;
            text-align: center;
            opacity: 0.8;
            line-height: 25px;
        `}
`;
