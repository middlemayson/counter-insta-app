import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InstaCopyTextScreen from './screens/InstaCopyText'; // Переименовываем компонент

function InstaCopyText() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={InstaCopyTextScreen} // Используем переименованный компонент
          options={{
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#3d3d3d',
              
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.9,
              shadowRadius: 5,
              elevation: 5,
            },
            headerTintColor: '#3d3d3d',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            title: 'Счетчик символов для постов',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
