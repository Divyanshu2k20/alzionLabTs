import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import List from '../screens/list/List';
import Item from '../screens/item/Item';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
