import React, { useCallback } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordButton from '../../components/screens/SignIn/ForgotPasswordButton';
import SignInWithMyAccountButton from '../../components/screens/SignIn/SignInWithMyAccountButton';
import GoToSignUpButton from '../../components/screens/SignIn/GoToSignUpButton';
import * as S from './styles';

const SignIn: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToSignIn = useCallback(() => {
        navigate('signUp');
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
            <S.Title>Welcome Back!</S.Title>

            <S.SubTitle>Sign in to continue</S.SubTitle>

            <S.Form>
                <S.Input placeholder="Email" />
                <S.Input placeholder="Password" />

                <ForgotPasswordButton>Forgot Password ?</ForgotPasswordButton>

                <SignInWithMyAccountButton activeOpacity={0.5}>
                    Sign in My Account
                </SignInWithMyAccountButton>

                <GoToSignUpButton onPress={GoToSignIn} activeOpacity={0.5}>
                    Don't have an account? - Sign Up
                </GoToSignUpButton>
            </S.Form>
        </S.Container>
    );
};

export default SignIn;
