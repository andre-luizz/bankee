import React from 'react';
import * as S from './styles';

const CodeNumberInput: React.FC = () => {
    return (
        <S.Container>
            <S.NumberContainer>
                <S.CodeNumber>7</S.CodeNumber>
            </S.NumberContainer>
            <S.NumberContainer>
                <S.CodeNumber>5</S.CodeNumber>
            </S.NumberContainer>
            <S.NumberContainer>
                <S.CodeNumber>1</S.CodeNumber>
            </S.NumberContainer>
            <S.NumberContainer>
                <S.CodeNumber>8</S.CodeNumber>
            </S.NumberContainer>
        </S.Container>
    );
};

export default CodeNumberInput;
