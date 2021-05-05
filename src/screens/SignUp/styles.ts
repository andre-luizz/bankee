import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Form = styled(Unform)`
    width: 100%;
    padding: 0 37px;
    margin-top: 62px;
`;
