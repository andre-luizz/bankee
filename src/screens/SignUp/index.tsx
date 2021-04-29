import React, { useCallback } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import SignUpWithMyAccountButton from '../../components/screens/SignUp/SignUpWithMyAccountButton';
import SignUpWithMyPhoneNumberButton from '../../components/screens/SignUp/SignUpWithMyPhoneNumberButton';
import GoToSignInButton from '../../components/screens/SignUp/GoToSignInButton';
import * as S from './styles';

const SignIn: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToSignIn = useCallback(() => {
        navigate('signIn');
    }, [navigate]);

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

                <SignUpWithMyAccountButton activeOpacity={0.5}>
                    Sign up my Account
                </SignUpWithMyAccountButton>

                <SignUpWithMyPhoneNumberButton activeOpacity={0.5}>
                    Sign up with Phone Number
                </SignUpWithMyPhoneNumberButton>

                <GoToSignInButton onPress={GoToSignIn} activeOpacity={0.5}>
                    Already have an account? - Sign In
                </GoToSignInButton>
            </S.Form>
        </S.Container>
    );
};

export default SignIn;
