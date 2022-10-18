import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Details, EpisodeDetails } from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Screen name='Home' component={Home} />
            <Screen name='Details' component={Details} />
            <Screen name='EpisodeDetails' component={EpisodeDetails} />
        </Navigator>
    )
}

export default MainNavigation