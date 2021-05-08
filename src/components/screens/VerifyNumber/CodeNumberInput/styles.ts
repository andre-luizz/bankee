import styled, { css } from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

interface CellTextProps {
    isFocused: boolean;
}

export const CellText = styled.Text<CellTextProps>`
    padding: 20px 0 10px 30px;
    font-size: 35px;
    font-family: ${fonts.title};
    color: ${colors.title};
    width: 80px;
    height: 80px;
    margin: 59px 10px 22px 0;
    border-bottom-width: 1.5px;
    border-bottom-color: ${colors.title};

    ${props =>
        props.isFocused &&
        css`
            border-bottom-color: ${colors.primary};
            color: ${colors.primary};
        `}
`;
