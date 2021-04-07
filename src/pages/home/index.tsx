import React from 'react';
import { Text, StatusBar, SafeAreaView } from 'react-native';
import { Container, BaseText, PageTitle, Button } from '../../globalStyles'
import { useColorScheme } from "react-native-appearance";
import { dark, light } from "../../theme";
import { translate } from "../../locales";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home: React.FC = ({navigation}) => {
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
        <Container theme={theme}>
            <PageTitle theme={theme}>Home</PageTitle>
            <BaseText theme={theme}>{translate('hello')}</BaseText>
            <Button theme={theme} onPress={() => navigation.navigate('dashboard')}>
                <Text>DASHBOARD</Text>
            </Button>
        </Container>
    </>
  );
}

export default Home;