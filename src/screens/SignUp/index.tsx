import React, { useCallback, useRef } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Button from '../../components/common/Button';
import * as S from './styles';
import { EButtonVariantProps } from '../../interfaces/enums/button.enum';
import Input from '../../components/common/Input';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { navigate } = useNavigation();

    const HandleSubmit = useCallback(data => {
        Alert.alert('Credentials', JSON.stringify(data));
    }, []);

    const GoToSignIn = useCallback(() => {
        navigate('signIn');
    }, [navigate]);

    const GoToSignUpWithPhoneNumber = useCallback(() => {
        navigate('signUpWithPhoneNumber');
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

            <S.FormContainer ref={formRef} onSubmit={HandleSubmit}>
                <Input name="name" placeholder="Full Name" />
                <Input
                    name="email"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    returnKeyType="next"
                />
                <Input
                    name="password"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    returnKeyType="next"
                />

                <S.Terms>
                    By creating your account you have to agree with our Teams
                    and Conditions.
                </S.Terms>

                <Button
                    onPress={() => formRef.current?.submitForm()}
                    activeOpacity={0.5}
                >
                    Sign up my Account
                </Button>

                <Button
                    variant={EButtonVariantProps.SECONDARY}
                    onPress={GoToSignUpWithPhoneNumber}
                    activeOpacity={0.5}
                >
                    Sign up with Phone Number
                </Button>

                <Button
                    variant={EButtonVariantProps.TERTIARY}
                    onPress={GoToSignIn}
                    activeOpacity={0.5}
                >
                    Already have an account? - Sign In
                </Button>
            </S.FormContainer>
        </S.Container>
    );
};

export default SignIn;
