import styled, { css } from 'styled-components/native';
import { Feather } from 'expo-vector-icons';
import colors from '../../../styles/colors';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: ${colors.input};
    border-radius: 5px;
    margin-top: 2.5px;
    margin-bottom: 8px;
    border-width: 2px;
    border-color: ${colors.input};
    flex-direction: row;
    align-items: center;

    ${props =>
        props.isFocused &&
        css`
            border-color: ${colors.primary};
        `}
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    background-color: ${colors.input};
    border-radius: 10px;
    margin-bottom: 5px;
    padding-left: 29px;
`;

export const Icon = styled(Feather)``;
