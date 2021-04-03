import styled from 'styled-components/native';
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";


const dark: Theme ={
    ...DarkTheme,
    colors: {
    ...DarkTheme.colors,
    background: '#000',
    primary: '#fff',
    text: '#a4a4a4',
    card: '#a45415'
    }
}


const light: Theme ={
    ...DefaultTheme,
    colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#000',
    text: '#4a4a4a',
    card: '#a45415'
    }
}

export { dark, light};