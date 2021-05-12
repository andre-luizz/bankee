import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import Button from '../../components/common/Button';
import PhoneInput from '../../components/screens/SignUpWithPhoneNumber/PhoneInput';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as S from './styles';
import Title from '../../components/common/Title';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';
import { useRandomCode } from '../../hooks/VerifyCode';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const SignUpWithPhoneNumber: React.FC = () => {
    const navigation = useNavigation();
    const { randomVerificationCode } = useRandomCode();

    const schedulePushNotification = useCallback(async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Hi, Dear',
                body: `Your confirmation code is ${randomVerificationCode()}`,
                color: colors.primary,
                badge: 1,
            },
            trigger: { seconds: 1 },
        });

        navigation.navigate('verifyNumber');
    }, [randomVerificationCode, navigation]);

    return (
        <S.Container>
            <Title>Mobile Number</Title>
            <Title variant={ETitleVariantProps.SECONDARY}>
                Please enter your valid phone number. We will {'\n'}
                send you 4-digit code to verify account.
            </Title>

            <PhoneInput
                containerStyle={{
                    marginTop: 63,
                    marginBottom: 107,
                    borderRadius: 15,
                    height: 50,
                    shadowColor: '#ececec',
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 60,
                }}
                textContainerStyle={{
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    shadowColor: '#f7f4f4',
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 0,
                }}
                codeTextStyle={{
                    color: colors.title,
                    fontFamily: fonts.title,
                    fontSize: 15,
                }}
                textInputStyle={{
                    color: colors.title,
                    fontFamily: fonts.title,
                    fontSize: 15,
                }}
                placeholder="+00 000 0000"
                defaultCode="BR"
                layout="first"
            />

            <Button onPress={schedulePushNotification}>Send Code</Button>
        </S.Container>
    );
};

export default SignUpWithPhoneNumber;
