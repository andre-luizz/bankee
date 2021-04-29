import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import { EButtonVariantProps } from '../../../interfaces/enums/button.enum';

interface ButtonProps {
    variant: EButtonVariantProps;
}

interface ButtonTextProps {
    variant: EButtonVariantProps;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin-bottom: 7px;

    ${props =>
        props.variant === 'SECONDARY' &&
        css`
            background-color: ${colors.white};
            border: solid 1.5px ${colors.primary};
        `};

    ${props =>
        props.variant === 'TERTIARY' &&
        css`
            background-color: transparent;
            height: auto;
        `}
`;

export const ButtonText = styled.Text<ButtonTextProps>`
    color: ${colors.white};
    font-family: ${fonts.title};
    font-size: 17px;
    line-height: 22px;
    text-align: center;

    ${props =>
        props.variant === 'SECONDARY' &&
        css`
            color: ${colors.primary};
        `}

    ${props =>
        props.variant === 'TERTIARY' &&
        css`
            margin-top: 19px;
            color: ${colors.body};
            font-size: 15px;
        `}
`;
