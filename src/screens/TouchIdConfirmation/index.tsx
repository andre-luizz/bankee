import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';
import { Image } from '../AccountCreated/styles';
import touchIdConfirmationImg from '../../assets/screens/touchIdConfirmation/finger-id-Access.png';
import * as S from './styles';

const TouchIdConfirmation: React.FC = () => {
    const { navigate } = useNavigation();

    const GoToMoneySummaryScreen = useCallback(() => {
        navigate('moneySummary');
    }, [navigate]);

    return (
        <S.Container>
            <Image source={touchIdConfirmationImg} />
            <Title style={{ marginTop: 0 }}>
                Use Touch ID to authorize payments
            </Title>
            <Title variant={ETitleVariantProps.SECONDARY}>
                Activate touch ID so you Don’t need to confirm your PIN every
                time you want to send money
            </Title>
            <Button style={{ marginTop: 75, marginBottom: 16 }}>
                Active now
            </Button>
            <Button
                onPress={GoToMoneySummaryScreen}
                style={{ backgroundColor: '#9EA6BE' }}
            >
                Skip This
            </Button>
        </S.Container>
    );
};

export default TouchIdConfirmation;
