import styled from 'styled-components/native';
import { Image as AccountCreatedImg } from 'react-native';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 37px;
`;

export const Image = styled(AccountCreatedImg)`
    margin-bottom: 74px;
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
