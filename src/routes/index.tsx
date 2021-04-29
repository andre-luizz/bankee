import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const routes = createStackNavigator();

const Routes: React.FC = () => (
    <routes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#fff' },
        }}
        initialRouteName="signUp"
    >
        <routes.Screen name="signUp" component={SignUp} />
        <routes.Screen name="signIn" component={SignIn} />
    </routes.Navigator>
);

export default Routes;
