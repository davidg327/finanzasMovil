import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/Home';
import HistoryScreen from '../screen/History';
import FormUserScreen from '../screen/FormUser';
import FormExpenseScreen from '../screen/FormExpense';
import FormHistoryScreen from "../screen/FormHistory";

const Stack = createNativeStackNavigator();

const RootStack = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'FormUser'}
          component={FormUserScreen}
          options={{title: 'Usuario', headerBackTitle: 'Volver'}}
        />
        <Stack.Screen
          name={'FormExpense'}
          component={FormExpenseScreen}
          options={{title: 'Gasto', headerBackTitle: 'Volver'}}
        />
        <Stack.Screen
          name={'History'}
          component={HistoryScreen}
          options={{title: 'Historial', headerBackTitle: 'Volver'}}
        />
        <Stack.Screen
          name={'FormHistory'}
          component={FormHistoryScreen}
          options={{title: 'Historial', headerBackTitle: 'Volver'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
