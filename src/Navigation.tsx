import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tasks from './screens/Tasks';
import List from './screens/List';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Tasks" component={Tasks} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View style={{ paddingVertical: 20 }}>
      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
      </View>
      <Button
        title="List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
})

export default Navigation;
