import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { Theme, theme } from './src/infrastructure/theme';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { SafeArea } from './src/components/utility/safe-area.component';

export interface IProps {
  theme: Theme;
}
interface TabBarIcon {
  color: string;
  size: number;
}

interface ScreenOptions {
  route: RouteProp<ParamListBase, string>;
}
interface TabIcon {
  Restaurants: string;
  Map: string;
  Settings: string;
}

const Tab = createMaterialBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const TAB_ICON: TabIcon = {
  Restaurants: 'ios-restaurant',
  Map: 'ios-map',
  Settings: 'ios-settings',
};

const createScreenOptions = ({ route }: ScreenOptions) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }: TabBarIcon) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarInactiveTintColor: 'gray',
    tabBarActiveTintColor: 'tomato',
  };
};

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Restaurants'
            screenOptions={createScreenOptions}
            activeColor={theme.colors.brand.primary}
            inactiveColor={theme.colors.ui.secondary}
            barStyle={{ backgroundColor: theme.colors.bg.primary }}
          >
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Map' component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
