import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const routes = createStackNavigator();

const Routes: React.FC = () => (
    <routes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' },
        }}
    >
        <routes.Screen name="signIn" component={SignIn} />
        <routes.Screen name="signUp" component={SignUp} />
    </routes.Navigator>
);

export default Routes;
