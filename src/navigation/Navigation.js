import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DirectMessage from '../views/ChatsView/DirectMessage'
import Chats from '../views/ChatsView/Chats'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Chats' component={Chats}/>
        <Stack.Screen name='DM' component={DirectMessage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation