import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.View`
    margin-top: 59px;
    height: 80px;
    width: 100%;
    background-color: ${colors.white};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NumberContainer = styled.View`
    height: 100%;
    width: 70px;
    background: ${colors.white};
    justify-content: center;
    align-items: center;
    border-bottom-width: 1.2px;
    border-bottom-color: ${colors.title};
`;

export const CodeNumber = styled.Text`
    font-family: ${fonts.title};
    font-size: 35px;
    color: ${colors.title};
    line-height: 46px;
`;
