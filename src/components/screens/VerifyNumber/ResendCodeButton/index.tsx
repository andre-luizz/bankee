import React from 'react';
import * as S from './styles';

const ResendCodeButton: React.FC = ({ children }) => {
    return (
        <S.Button>
            <S.ButtonText>{children}</S.ButtonText>
        </S.Button>
    );
};

export default ResendCodeButton;
