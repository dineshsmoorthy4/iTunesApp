import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumList from '../features/albums/AlbumList';
import AlbumDetails from '../features/albums/AlbumDetails';
import { useTheme } from '../themes/ThemeContext';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Strings } from '../constants/strings';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isDark, toggleTheme, theme } = useTheme();
  
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
              <Icon name={isDark ? 'sunny' : 'mode-night'} size={22} color={theme.icon} />
            </TouchableOpacity>
          ),
        }}
      >
        <Stack.Screen name={Strings.appTitle} component={AlbumList} />
        <Stack.Screen name={Strings.detailsTitle} component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
