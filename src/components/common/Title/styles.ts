import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

interface TitleProps {
    variant: 'primary' | 'secondary' | 'tertiary';
}

export const Title = styled.Text<TitleProps>`
    font-family: ${fonts.title};
    font-size: 35px;
    color: ${colors.title};
    line-height: 46px;

    ${props =>
        props.variant === 'secondary' &&
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
