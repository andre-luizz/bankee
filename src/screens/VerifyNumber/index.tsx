import React from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import CodeNumberInput from '../../components/screens/VerifyNumber/CodeNumberInput';
import * as S from './styles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';
import ResendCodeButton from '../../components/screens/VerifyNumber/ResendCodeButton';

const VerifyNumber: React.FC = () => {
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

            <Button>Proceed</Button>

            <Text
                style={{
                    marginTop: 21,
                    fontFamily: fonts.body,
                    color: colors.body,
                    fontSize: 13,
                    lineHeight: 25,
                    textAlign: 'center',
                }}
            >
                by clicking start, you agree to our our Privacy Policy {'\n'}
                our Teams and Conditions
            </Text>
        </S.Container>
    );
};

export default VerifyNumber;
