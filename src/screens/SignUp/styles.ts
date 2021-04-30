import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${fonts.title};
    font-size: 35px;
    color: ${colors.title};
    line-height: 46px;
    line-height: 46px;
`;

export const SubTitle = styled.Text`
    font-family: ${fonts.body};
    font-size: 15px;
    color: ${colors.body};
    margin-top: 21px;
    text-align: center;
    opacity: 0.8;
    line-height: 25px;
`;

export const Form = styled(Unform)`
    width: 100%;
    padding: 0 37px;
    margin-top: 62px;
`;

export const Terms = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.body};
    font-size: 13px;
    letter-spacing: 0.3px;
    color: ${colors.body};
    margin-top: 28px;
    margin-bottom: 49px;
`;
