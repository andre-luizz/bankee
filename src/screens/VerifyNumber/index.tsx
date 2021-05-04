import React from 'react';
import {
    useFonts,
    DMSans_700Bold,
    DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CodeNumberInput from '../../components/screens/VerifyNumber/CodeNumberInput';
import * as S from './styles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import Button from '../../components/common/Button';

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
            <S.Title>Verify Account</S.Title>
            <S.SubTitle>
                Enter 4-digit Code code we have sent to at {'\n'}
                <S.PhoneNumber>+0 000 000 0000.</S.PhoneNumber>
            </S.SubTitle>
            <CodeNumberInput />
            <Text
                style={{
                    marginTop: 43,
                    fontFamily: fonts.body,
                    color: colors.body,
                    fontSize: 15,
                }}
            >
                Didn’t not received the code?
            </Text>
            <TouchableOpacity style={{ marginTop: 16, marginBottom: 100 }}>
                <Text
                    style={{
                        fontFamily: fonts.title,
                        fontSize: 18,
                        textDecorationLine: 'underline',
                        color: colors.primary,
                    }}
                >
                    Resend Code
                </Text>
            </TouchableOpacity>
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
