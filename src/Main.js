import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { speechBubble } from './assets/speech-bubble.png'
import MatchFeed from './screens/matches';

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function matchesScreen() {
  return (
      <MatchFeed />
  );
}





const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Random Chat') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Matches') {
                  iconName = focused ? 'ios-list' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
        <Tab.Screen name="Random Chat" component={ChatScreen} />
        <Tab.Screen name="Matches" component={matchesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
