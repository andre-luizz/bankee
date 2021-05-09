import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUpWithPhoneNumber from '../screens/SignUpWithPhoneNumber';
import VerifyNumber from '../screens/VerifyNumber';
import AccountCreated from '../screens/AccountCreated';

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
        <routes.Screen
            name="signUpWithPhoneNumber"
            component={SignUpWithPhoneNumber}
        />
        <routes.Screen name="verifyNumber" component={VerifyNumber} />
        <routes.Screen name="accountCreated" component={AccountCreated} />
    </routes.Navigator>
);

export default Routes;
