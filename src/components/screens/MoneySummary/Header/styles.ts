import styled from 'styled-components/native';
import { Feather } from 'expo-vector-icons';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Container = styled.View`
    position: relative;
    height: 120px;
    padding: 0 37px;
`;

export const HeaderTitle = styled.Text`
    margin: auto;
    font-family: ${fonts.title};
    color: ${colors.title};
    font-size: 20px;
    line-height: 26px;
    text-align: center;
`;

export const Icon = styled(Feather)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-18px);
`;
