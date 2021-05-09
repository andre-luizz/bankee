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

            <Title variant="secondary">
                Enter 4-digit Code code we have sent to at {'\n'}
                <S.PhoneNumber>+0 000 000 0000.</S.PhoneNumber>
            </Title>

            <CodeNumberInput />

            <Title variant="secondary">Didn’t not received the code?</Title>

            <ResendCodeButton>Resend Code</ResendCodeButton>

            <Button onPress={GoToAccountCreatedScreen}>Proceed</Button>

            <Title variant="secondary">
                by clicking start, you agree to our our Privacy Policy our Teams
                and Conditions
            </Title>
        </S.Container>
    );
};

export default VerifyNumber;
