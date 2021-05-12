import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const TopContainer = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 37px;
`;

export const Value = styled.Text`
    font-family: ${fonts.title};
    font-size: 40px;
    color: ${colors.title};
    text-align: center;
`;

export const BottomContainer = styled.View`
    height: 260px;
    width: 100%;
`;

export const BottomContainerHeader = styled.Text`
    font-family: ${fonts.title};
    color: ${colors.title};
    font-size: 20px;
    line-height: 26px;
    background: #f9f9fb;
    padding: 20px 0 0px 20px;
`;

export const CardsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #f9f9fb;
    padding: 20px;
`;

export const Card = styled.View`
    margin-right: 16px;
    border-radius: 10px;
    height: auto;
    width: 174px;
    justify-content: center;
    align-items: center;
    background: ${colors.white};
    padding: 20px;
`;

export const CardTitle = styled.Text`
    margin-top: 20px;
    font-family: ${fonts.title};
    font-size: 16px;
    color: ${colors.title};
    text-align: center;
`;

export const CardValue = styled.Text`
    font-family: ${fonts.title};
    font-size: 15px;
    color: ${colors.body};
    text-align: center;
`;

export const CardStatusContainer = styled.View`
    margin-top: 17px;
    width: 50%;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    background: #f9f9fb;
    border-radius: 15px;
`;

export const CardStatusText = styled.Text`
    font-family: ${fonts.body};
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #7d8cb4;
`;
