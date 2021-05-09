/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { Alert, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import ForgotPasswordButton from '../../components/screens/SignIn/ForgotPasswordButton';
import Button from '../../components/common/Button';
import * as S from './styles';
import Input from '../../components/common/Input';
import Title from '../../components/common/Title';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { navigate } = useNavigation();

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const HandleSubmit = useCallback(data => {
        Alert.alert('Credentials', JSON.stringify(data));
    }, []);

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
            <Title>Welcome Back!</Title>

            <Title variant="secondary">Sign in to continue</Title>

            <S.Form ref={formRef} onSubmit={HandleSubmit}>
                <Input
                    ref={emailInputRef}
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    name="email"
                    placeholder="Email"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordInputRef.current?.focus();
                    }}
                />
                <Input
                    ref={passwordInputRef}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    icon="eye"
                    textContentType="newPassword"
                    returnKeyType="send"
                    onSubmitEditing={() => formRef.current?.submitForm()}
                />

                <ForgotPasswordButton>Forgot Password ?</ForgotPasswordButton>

                <Button
                    onPress={() => formRef.current?.submitForm()}
                    activeOpacity={0.5}
                >
                    Sign in
                </Button>

                <Button
                    variant="tertiary"
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
