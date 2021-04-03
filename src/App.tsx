import React from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';
import { Container, BaseText } from './globalStyles'
import { useColorScheme } from "react-native-appearance";
import { dark, light } from "./theme/index";
import { NavigationContainer } from '@react-navigation/native';
import { translate } from "./locales";

const src: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme == 'dark' ? dark : light;
  return (
    <>
    <StatusBar
    animated
    backgroundColor={theme.colors.background}
    barStyle={theme.dark ? 'light-content' : 'dark-content'}
    showHideTransition='fade'
    /> 
    <NavigationContainer theme={theme}>
        <Container theme={theme}>
            <BaseText theme={theme}>{translate('hello')}</BaseText>
        </Container>
    </NavigationContainer>
    </>
  );
}

export default src;