/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useCallback } from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import CodeNumberInput from '../../components/screens/VerifyNumber/CodeNumberInput';
import * as S from './styles';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';
import ResendCodeButton from '../../components/screens/VerifyNumber/ResendCodeButton';

const VerifyNumber: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToAccountCreatedScreen = useCallback(() => {
        navigate('accountCreated');
    }, [navigate]);

    const GoToPrivacyPolicyScreen = useCallback(() => {
        navigate('privacyPolicy');
    }, [navigate]);

    const GoToTermsAndConditionsScreen = useCallback(() => {
        navigate('termsAndConditions');
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
            <Title>Verify Account</Title>

            <Title variant={ETitleVariantProps.SECONDARY}>
                Enter 4-digit Code code we have sent to at {'\n'}
                <S.PhoneNumber>+0 000 000 0000.</S.PhoneNumber>
            </Title>

            <CodeNumberInput />

            <Title variant={ETitleVariantProps.SECONDARY}>
                Didn’t not received the code?
            </Title>

            <ResendCodeButton>Resend Code</ResendCodeButton>

            <Button onPress={GoToAccountCreatedScreen}>Proceed</Button>

            <S.TermsAndPrivacyPolicyContainer>
                by clicking start, you agree to our{' '}
                <S.PrivacyPolicy onPress={GoToPrivacyPolicyScreen}>
                    Privacy Policy
                </S.PrivacyPolicy>{' '}
                our{' '}
                <S.TermsAndConditions onPress={GoToTermsAndConditionsScreen}>
                    Teams and Conditions
                </S.TermsAndConditions>
            </S.TermsAndPrivacyPolicyContainer>
        </S.Container>
    );
};

export default VerifyNumber;
