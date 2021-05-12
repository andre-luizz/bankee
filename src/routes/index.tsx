import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUpWithPhoneNumber from '../screens/SignUpWithPhoneNumber';
import VerifyNumber from '../screens/VerifyNumber';
import AccountCreated from '../screens/AccountCreated';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TermsAndConditions from '../screens/TermsAndConditions';
import TouchIdConfirmation from '../screens/TouchIdConfirmation';
import MoneySummary from '../screens/MoneySummary';
import fonts from '../styles/fonts';
import colors from '../styles/colors';

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
        <routes.Screen
            name="privacyPolicy"
            component={PrivacyPolicy}
            options={{
                headerShown: true,
                headerTintColor: colors.white,
                headerStyle: { height: 120, backgroundColor: colors.primary },
                headerTitle: 'Privacy Policy',
                headerTitleStyle: {
                    fontFamily: fonts.title,
                    fontSize: 30,
                },
            }}
        />
        <routes.Screen
            name="termsAndConditions"
            component={TermsAndConditions}
            options={{
                headerShown: true,
                headerTintColor: colors.white,
                headerStyle: { height: 120, backgroundColor: colors.primary },
                headerTitle: 'Terms and Conditions',
                headerTitleStyle: {
                    fontFamily: fonts.title,
                    fontSize: 30,
                },
            }}
        />
        <routes.Screen name="accountCreated" component={AccountCreated} />
        <routes.Screen
            name="touchIdConfirmation"
            component={TouchIdConfirmation}
        />
        <routes.Screen name="moneySummary" component={MoneySummary} />
    </routes.Navigator>
);

export default Routes;
