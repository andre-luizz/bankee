import React from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import * as S from './styles';

const SignIn: React.FC = () => {
    const [fontsLoaded] = useFonts({
        DMSans_700Bold,
        DMSans_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <S.Container>
            <S.Title>Welcome!</S.Title>
            <S.SubTitle>
                Please provide following {'\n'}
                details for your new account
            </S.SubTitle>
            <S.Form>
                <S.Input placeholder="Full Name" />
                <S.Input placeholder="Email Adress" />
                <S.Input placeholder="Password" />
                <S.Terms>
                    By creating your account you have to agree with our Teams
                    and Conditions.
                </S.Terms>
                <S.SignUpWithMyAccountButton activeOpacity={0.5}>
                    <S.SignUpWithMyAccountButtonText>
                        Sign up my Account
                    </S.SignUpWithMyAccountButtonText>
                </S.SignUpWithMyAccountButton>
                <S.SignUpWithMyPhoneNumber activeOpacity={0.5}>
                    <S.SignUpWithMyPhoneNumberText>
                        Sign up with Phone Number
                    </S.SignUpWithMyPhoneNumberText>
                </S.SignUpWithMyPhoneNumber>
                <S.GoToSignInButton activeOpacity={0.5}>
                    <S.GoToSignInButtonText>
                        Already have an account? - Sign In
                    </S.GoToSignInButtonText>
                </S.GoToSignInButton>
            </S.Form>
        </S.Container>
    );
};

export default SignIn;
