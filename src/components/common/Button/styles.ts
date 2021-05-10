/* eslint-disable no-bitwise */
import styled, { css } from 'styled-components/native';
import { EButtonVariantProps } from '../../../interfaces/enums/button.enum';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

interface ButtonProps {
    variant: EButtonVariantProps;
}

type ButtonTextProps = ButtonProps;

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 10px;
    margin-bottom: 7px;

    ${props =>
        props.disabled &&
        css`
            background-color: rgba(113, 101, 227, 0.2);
        `}

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
