/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
} from 'react-native';
import { FormHandles } from '@unform/core';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../components/common/Button';
import * as S from './styles';
import { EButtonVariantProps } from '../../interfaces/enums/button.enum';
import Input from '../../components/common/Input';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const SignIn: React.FC = () => {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [buttonDisableState, setButtonDisableState] = React.useState(true);

    const formRef = useRef<FormHandles>(null);
    const { navigate } = useNavigation();

    const emailInputRef = useRef<TextInput>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const HandleCheckBox = useCallback(() => {
        setCheckboxState(!checkboxState);
        setButtonDisableState(!buttonDisableState);
    }, [checkboxState, buttonDisableState]);

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
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ flex: 1 }}
            >
                <S.Container>
                    <S.Title>Welcome!</S.Title>

                    <S.SubTitle>
                        Please provide following {'\n'}
                        details for your new account
                    </S.SubTitle>

                    <S.Form ref={formRef} onSubmit={HandleSubmit}>
                        <Input
                            autoCapitalize="words"
                            name="name"
                            placeholder="Full Name"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                emailInputRef.current?.focus();
                            }}
                        />
                        <Input
                            ref={emailInputRef}
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            name="email"
                            placeholder="Email Address"
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
                            onSubmitEditing={() => {
                                formRef.current?.submitForm();
                            }}
                        />

                        <BouncyCheckbox
                            size={25}
                            style={{
                                width: '100%',
                                marginTop: 28,
                                marginBottom: 49,
                            }}
                            text="By creating your account you have to agree with our Teams and Conditions."
                            iconStyle={{
                                borderColor: colors.primary,
                                backgroundColor: 'rgba(113, 101, 227, 0.2)',
                                borderRadius: 4,
                                height: 26,
                                width: 26,
                            }}
                            textStyle={{
                                fontFamily: fonts.body,
                                fontSize: 13,
                                color: colors.body,
                            }}
                            onPress={HandleCheckBox}
                        />

                        <Button
                            disabled={buttonDisableState}
                            onPress={() => formRef.current?.submitForm()}
                            activeOpacity={0.5}
                        >
                            Create account
                        </Button>

                        <Button
                            disabled={buttonDisableState}
                            variant={EButtonVariantProps.SECONDARY}
                            onPress={GoToSignUpWithPhoneNumber}
                            activeOpacity={0.5}
                        >
                            Create with Phone Number
                        </Button>

                        <Button
                            variant={EButtonVariantProps.TERTIARY}
                            onPress={GoToSignIn}
                            activeOpacity={0.5}
                        >
                            Already have an account? - Sign In
                        </Button>
                    </S.Form>
                </S.Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignIn;
