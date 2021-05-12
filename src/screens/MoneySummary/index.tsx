import React from 'react';
import { Image } from 'react-native';
import Header from '../../components/screens/MoneySummary/Header';
import moneySummaryImg from '../../assets/screens/moneySummary/money-summary-img.png';
import burgerImg from '../../assets/screens/moneySummary/burger.png';
import * as S from './styles';
import Title from '../../components/common/Title';
import { ETitleVariantProps } from '../../interfaces/enums/title.enum';
import Button from '../../components/common/Button';

const MoneySummary: React.FC = () => {
    return (
        <>
            <Header>Summary</Header>
            <S.TopContainer>
                <Image source={moneySummaryImg} />
                <Title style={{ fontSize: 20, marginTop: 19 }}>
                    This month spending
                </Title>
                <S.Value>$1,785</S.Value>
                <Title
                    style={{ marginBottom: 17 }}
                    variant={ETitleVariantProps.SECONDARY}
                >
                    Well done you have maintain your {'\n'} spending under
                    control
                </Title>
                <Button>Great</Button>
            </S.TopContainer>
            <S.BottomContainer>
                <S.BottomContainerHeader>Top Category</S.BottomContainerHeader>
                <S.CardsContainer>
                    <S.Card>
                        <Image source={burgerImg} />
                        <S.CardTitle>Mock</S.CardTitle>
                        <S.CardValue>$450</S.CardValue>
                        <S.CardStatusContainer>
                            <S.CardStatusText>Mock</S.CardStatusText>
                        </S.CardStatusContainer>
                    </S.Card>
                    <S.Card>
                        <Image source={burgerImg} />
                        <S.CardTitle>Mock</S.CardTitle>
                        <S.CardValue>$450</S.CardValue>
                        <S.CardStatusContainer>
                            <S.CardStatusText>Mock</S.CardStatusText>
                        </S.CardStatusContainer>
                    </S.Card>
                </S.CardsContainer>
            </S.BottomContainer>
        </>
    );
};

export default MoneySummary;
