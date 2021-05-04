import { NavigationHelpersContext } from '@react-navigation/core';
import React, { useCallback, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/common/Button';
import PhoneInput from '../../components/screens/SignUpWithPhoneNumber/PhoneInput';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import * as S from './styles';

const SignUpWithPhoneNumber: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToVerifyNumber = useCallback(() => {
        navigate('verifyNumber');
    }, []);

    return (
        <S.Container>
            <S.Title>Mobile Number</S.Title>
            <S.SubTitle>
                Please enter your valid phone number. We will {'\n'}
                send you 4-digit code to verify account.
            </S.SubTitle>

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
                autoFocus
            />

            <Button onPress={GoToVerifyNumber}>Send Code</Button>
        </S.Container>
    );
};

export default SignUpWithPhoneNumber;
