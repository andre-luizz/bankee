import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 37px;
    padding-right: 37px;
`;

export const Title = styled.Text`
    font-family: ${fonts.title};
    font-size: 15px;
    color: ${colors.title};
`;
