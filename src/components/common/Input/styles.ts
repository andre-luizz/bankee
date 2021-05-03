import styled, { css } from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    padding-left: 29px;
    padding-right: 19px;
    background: ${colors.input};
    border-radius: 10px;
    margin-top: 2.5px;
    margin-bottom: 8px;
    border-width: 1px;
    border-color: ${colors.input};
    flex-direction: row;
    align-items: center;

    ${props =>
        props.isFocused &&
        css`
            border-color: ${colors.primary};
            background: rgba(113, 101, 227, 0.2);
        `}
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${colors.body};
    font-size: 14px;
    font-family: ${fonts.body};
`;
