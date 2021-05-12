import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { RandomProvider } from './hooks/VerifyCode';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <RandomProvider>
                <Routes />
            </RandomProvider>
        </NavigationContainer>
    );
};

export default App;
