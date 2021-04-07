import styled from 'styled-components/native';
import { Theme } from "@react-navigation/native";

export const Container = styled.View<{theme:Theme}>`
    background-color: ${props => props.theme.colors.background};
    flex:1;
    justify-content:space-around;
`;

export const BaseText = styled.Text<{theme:Theme}>`
    color: ${ props => props.theme.colors.text};
    text-align:center;
`

export const PageTitle = styled.Text<{theme:Theme}>`
    color: ${ props => props.theme.colors.text};
    justify-content:center;
    align-content:center;
    text-align:center;
    font-size:30px;
`

export const Button = styled.TouchableOpacity<{theme:Theme}>`
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.card};
    padding:20px;
    justify-content:center;
    align-items:center;
    margin:0 10%;
    border-radius:4px;
`