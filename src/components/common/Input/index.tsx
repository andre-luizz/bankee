/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-assign */
import React, {
    useCallback,
    useState,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import * as S from './styles';
import colors from '../../../styles/colors';

interface InputProps extends TextInputProps {
    name: string;
    icon?: string;
}

interface InputValueReference {
    value: string;
}

interface InputRef {
    focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, icon, ...rest },
    ref,
) => {
    const inputElementRef = useRef<any>(null);
    const { registerField, fieldName, defaultValue = '' } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!inputValueRef.current?.value);
    }, []);

    useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
    }));

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                inputValueRef.current.value = value;
                inputElementRef.current.setNativeProps({ text: value });
            },
            clearValue() {
                inputValueRef.current.value = '';
                inputElementRef.current.clear();
            },
        });
    }, [registerField, fieldName]);

    return (
        <S.Container isFocused={isFocused}>
            <S.Input
                ref={inputElementRef}
                keyboardAppearance="dark"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={value => (inputValueRef.current.value = value)}
                {...rest}
            />
        </S.Container>
    );
};

export default forwardRef(Input);