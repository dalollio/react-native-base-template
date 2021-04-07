import React from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Container } from './globalStyles';
import Navigation from './navigation';
import { dark, light } from './theme';

// import { Container } from './styles';

const App: React.FC = () => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? dark : light;
  return (
    <SafeAreaProvider>
        <Container theme={theme} style={{backgroundColor:'#fff', flex:1}}>
            <Navigation />
        </Container>
    </SafeAreaProvider>
  )
}

export default App;