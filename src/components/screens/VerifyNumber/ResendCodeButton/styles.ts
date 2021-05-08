import styled from 'styled-components/native';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Button = styled.TouchableOpacity`
    margin-top: 16px;
    margin-bottom: 100px;
`;

export const ButtonText = styled.Text`
    font-family: ${fonts.title};
    font-size: 18px;
    text-decoration-line: underline;
    color: ${colors.primary};
`;
