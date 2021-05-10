import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 37px;
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

export const PhoneNumber = styled.Text`
    font-family: ${fonts.title};
    font-size: 15px;
    color: ${colors.primary};
    opacity: 0.8;
`;

export const TermsAndPrivacyPolicyContainer = styled.Text`
    margin-top: 21px;
    width: 90%;
    height: 50px;
    font-family: ${fonts.body};
    color: ${colors.body};
    font-size: 13px;
    text-align: center;
`;

export const PrivacyPolicy = styled.Text`
    text-decoration-line: underline;
    color: ${colors.primary};
    font-family: ${fonts.title};
`;

export const TermsAndConditions = styled.Text`
    text-decoration-line: underline;
    color: ${colors.primary};
    font-family: ${fonts.title};
`;
