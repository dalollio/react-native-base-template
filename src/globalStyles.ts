import styled from 'styled-components/native';
import { Theme } from "@react-navigation/native";

export const Container = styled.View<{theme:Theme}>`
    background-color: ${props => props.theme.colors.background};
    flex:1;
`;

export const BaseText = styled.Text<{theme:Theme}>`
    color: ${ props => props.theme.colors.text};
`
