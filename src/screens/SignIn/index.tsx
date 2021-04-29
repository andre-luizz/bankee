import React, { useCallback } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import ForgotPasswordButton from '../../components/screens/SignIn/ForgotPasswordButton';
import Button from '../../components/common/Button';
import * as S from './styles';
import { EButtonVariantProps } from '../../interfaces/enums/button.enum';

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

                <Button activeOpacity={0.5}>Sign in My Account</Button>

                <Button
                    variant={EButtonVariantProps.TERTIARY}
                    onPress={GoToSignIn}
                    activeOpacity={0.5}
                >
                    Don't have an account? - Sign Up
                </Button>
            </S.Form>
        </S.Container>
    );
};

export default SignIn;
