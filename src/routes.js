import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

import Main from './pages/Main';
import Search from './pages/Search';
import YourLibrar from './pages/YouLibrary';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Início':
                iconName = focused ? 'md-home' : 'md-home';
                break;
              case 'Buscar':
                iconName = focused ? 'ios-search' : 'ios-search';
                break;
              case 'Sua Biblioteca':
                iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#888',
        }}>
        <Tab.Screen name="Início" component={Main} />
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Sua Biblioteca" component={YourLibrar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
