import React, { useState } from 'react';
import { ViewProps, TextInput } from 'react-native';
import * as S from './styles';

interface CodeNumberInputProps extends ViewProps {
    codeNumbers: string;
}

const CodeNumberInput: React.FC<CodeNumberInputProps> = () => {
    const [codeNumbers, setCodeNumbers] = useState('32');
    const codeNumberIndex = codeNumbers.split('');

    return (
        <>
            <S.Container>
                {codeNumberIndex.map(code => (
                    <S.NumberContainer>
                        <S.CodeNumber>{code}</S.CodeNumber>
                    </S.NumberContainer>
                ))}
                <TextInput
                    onChangeText={number =>
                        setCodeNumbers(state => state.concat(number))
                    }
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: 70,
                        marginTop: 50,
                        backgroundColor: 'transparent',
                    }}
                />
            </S.Container>
        </>
    );
};

export default CodeNumberInput;
