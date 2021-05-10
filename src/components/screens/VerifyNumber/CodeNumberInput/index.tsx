import React, { useState } from 'react';
import {
    Cursor,
    useClearByFocusCell,
    CodeField,
} from 'react-native-confirmation-code-field';
import * as S from './styles';

const CodeNumberInput: React.FC = () => {
    const [value, setValue] = useState('7815');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={4}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol: codeNumber, isFocused }) => (
                <S.CellText
                    isFocused={isFocused}
                    key={index}
                    onLayout={getCellOnLayoutHandler(index)}
                >
                    {codeNumber || (isFocused ? <Cursor /> : null)}
                </S.CellText>
            )}
        />
    );
};

export default CodeNumberInput;
