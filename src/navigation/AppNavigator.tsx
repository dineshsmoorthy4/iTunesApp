import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumList from '../features/albums/AlbumList';
import AlbumDetails from '../features/albums/AlbumDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Albums" component={AlbumList} />
        <Stack.Screen name="Album Details" component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
