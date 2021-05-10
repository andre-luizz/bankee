import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
`;

export const PrivacyPolicyTextContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
    height: auto;
    padding: 20px;
`;

export const PrivacyPolicyText = styled.Text`
    text-align: justify;
    font-family: ${fonts.body};
    color: ${colors.body};
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.9px;
`;
