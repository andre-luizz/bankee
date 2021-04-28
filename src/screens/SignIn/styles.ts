import styled from 'styled-components/native';
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

export const Form = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 37px;
    margin-top: 62px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.complement,
    placeholderFontFamily: fonts.body,
})`
    width: 100%;
    height: 50px;
    background-color: ${colors.input};
    border-radius: 10px;
    margin-bottom: 5px;
    padding-left: 29px;
`;

export const Terms = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.body};
    font-size: 13px;
    letter-spacing: 0.3px;
    color: ${colors.body};
    margin-top: 28px;
`;

export const SignUpWithMyAccountButton = styled.TouchableOpacity`
    width: 100%;
    background-color: ${colors.primary};
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 49px;
    margin-bottom: 7px;
`;

export const SignUpWithMyAccountButtonText = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.white};
    font-weight: bold;
    font-size: 17px;
`;

export const SignUpWithMyPhoneNumber = styled.TouchableOpacity`
    width: 100%;
    background-color: ${colors.title};
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 19px;
`;

export const SignUpWithMyPhoneNumberText = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.white};
    font-weight: bold;
    font-size: 17px;
`;

export const GoToSignInButton = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const GoToSignInButtonText = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.body};
    font-weight: bold;
    font-size: 17px;
`;
