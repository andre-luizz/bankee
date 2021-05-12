import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import colors from '../../../../styles/colors';

import * as S from './styles';

const Header: React.FC = ({ children }) => {
    const { goBack } = useNavigation();

    const BackToTouchIdConfirmation = useCallback(() => {
        goBack();
    }, [goBack]);

    return (
        <S.Container>
            <S.Icon
                name="chevron-left"
                size={30}
                color={colors.title}
                onPress={BackToTouchIdConfirmation}
            />
            <S.HeaderTitle>{children}</S.HeaderTitle>
        </S.Container>
    );
};

export default Header;
