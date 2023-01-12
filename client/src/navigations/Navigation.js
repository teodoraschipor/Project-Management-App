import React, { useContext, useEffect } from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as SprintContext } from '../context/SprintContext';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
import TaskCreateScreen from '../screens/TaskCreateScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import TaskEditScreen from '../screens/TaskEditScreen';
import AccountScreen from '../screens/AccountScreen';
import SprintDetailScreen from '../screens/SprintDetailScreen';
import SprintCreateScreen from '../screens/SprintCreateScreen';
import SprintEditScreen from '../screens/SprintEditScreen';
import { colors } from '../theme';
import { spacing } from '../theme/spacing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const StackNavigator = () => {

  const { state } = useContext(AuthContext)
  const { addSprint} = useContext(SprintContext);

  const routes = state.isAuthenticated ? (
    <React.Fragment>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={({ navigation }) => ({
        title: 'Sprints',
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         },
        headerRight: () => (
          <View>
            {state.permission === "admin" &&
              <TouchableOpacity style={styles.container} onPress={() => {
                addSprint(navigation.navigate("SprintCreateScreen"));
                
              }} >
                <Image style={styles.plus} source={require('../assets/plus.png')} />
            </TouchableOpacity>}
          </View>
        ),
        })} />
      <Stack.Screen name="SprintDetailScreen" component={SprintDetailScreen} options={() => ({
        title: 'Sprint Details',
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
        })} />
      <Stack.Screen name="SprintCreateScreen" component={SprintCreateScreen} options={() => ({
        title: 'Create Sprint',
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
        })}/>
         <Stack.Screen name="SprintEditScreen" component={SprintEditScreen} options={() => ({
        title: 'Edit Sprint',
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
        })}/>
      <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} options={() => ({
        title: 'Task Details',
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
        })}/>
      <Stack.Screen name="TaskCreateScreen" component={TaskCreateScreen} options={() => ({
        title: "Create Task",
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
      })} />
      <Stack.Screen name="TaskEditScreen" component={TaskEditScreen} options={() => ({
        title: "Edit Task",
        headerStyle: {
          backgroundColor: colors.background
         },
         headerTitleStyle: {
          color: colors.textColor
         }
      })} />
      <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen} options={() => ({
          title: "",
          headerStyle: {
            backgroundColor: colors.background
           },
           headerTitleStyle: {
            color: colors.textColor
           }
        })}
      />
      <Stack.Screen
      name="SignupScreen"
      component={SignupScreen} options={() => ({
        title: "",
        headerStyle: {
          backgroundColor: colors.background
          },
          headerTitleStyle: {
          color: colors.textColor
          }
      })}
      />
    </React.Fragment>
  );
  return (
    <Stack.Navigator>
      {routes}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: spacing[3],
    padding: spacing[1],
    borderRadius: 5,
    backgroundColor: colors.orange,
  },
  plus: {
    width: 20,
    height: 20,
}
})

export default StackNavigator;
