import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import accountCreatedImg from '../../assets/screens/accountCreated/account-created-img.png';
import * as S from './styles';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';

const AccountCreated: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToPrivacyPolicyScreen = useCallback(() => {
        navigate('privacyPolicy');
    }, [navigate]);

    const GoToTermsAndConditionsScreen = useCallback(() => {
        navigate('termsAndConditions');
    }, [navigate]);

    const GoToTouchIdConfirmationScreen = useCallback(() => {
        navigate('touchIdConfirmation');
    }, [navigate]);

    return (
        <S.Container>
            <S.Image source={accountCreatedImg} />

            <Title>Account Created!</Title>

            <Title variant={ETitleVariantProps.SECONDARY}>
                Dear user your account has been created successfully. Continue
                to start using app
            </Title>

            <Button
                onPress={GoToTouchIdConfirmationScreen}
                style={{ marginTop: 130 }}
            >
                Continue
            </Button>

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

export default AccountCreated;
