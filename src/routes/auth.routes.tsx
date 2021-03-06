import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/themes';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        screenOptions={{
                contentStyle: { backgroundColor: theme.colors.secondary100 },
                headerShown: false,
            }}
        >          
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails}/>
            <Screen name="AppointmentCreate" component={AppointmentCreate}/>

        </Navigator>

    );
}

