import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Color from 'src/common/style/color';
import HomeScreen from 'src/screens/Home/Home';
import DetailsScreen from 'src/screens/Details/Details';

/**
 * Create stack navigator in React navigation v5
 * https://reactnavigation.org/docs/hello-react-navigation#creating-a-stack-navigator
 */
const Stack = createStackNavigator();

/**
 * Set Header defualt navigation options
 * https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
 */
const defaultNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Color.primaryColor,
  },
  headerTintColor: Color.secondaryColor,
  headerTitleAlign: 'center',
  headerBackTitle: 'Back',
};

/**
 * Root navigation container
 * screenOption is props where you can set your all screen defualt option
 * options set for single screen
 */
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigationOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: 'Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
