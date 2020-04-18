/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import cac man hinh theo stack
import {
  AccountScreen,
  FixAccountScreen,
} from './screens_stack/account_screens/export_account_screen';
import {
  AddEventScreen,
  EventScreen,
} from './screens_stack/events_screens/export_events_screen';

import {
  FamilyScreen,
  AddFamilyScreen,
  FamilyInfoScreen,
  FixInfoScreen,
} from './screens_stack/family_screens/export_family_screen';
import {
  AddGenealogyScreen,
  DisplayGenealogy,
  FixInfoGenealogy,
  GenealogyScreen,
} from './screens_stack/genealogy_screens/export_genealogy_screen';
import {NewsScreen} from './screens_stack/news_screens/export_news_screen';

//tao stack
const accountStack = createStackNavigator();
const accountStackScreen = () => (
  <accountStack.Navigator>
    <accountStack.Screen
      name="SignIn"
      component={AccountScreen}
      options={{title: 'Account'}}
    />
    <accountStack.Screen
      name="CreateAccount"
      component={FixAccountScreen}
      options={{title: 'Fix Account'}}
    />
  </accountStack.Navigator>
);
const eventStack = createStackNavigator();
const eventStackScreen = () => (
  <eventStack.Navigator>
    <eventStack.Screen
      name="Event Screen"
      component={EventScreen}
      options={{title: 'Event'}}
    />
    <eventStack.Screen
      name="AddEventScreen"
      component={AddEventScreen}
      options={{title: 'Add Event'}}
    />
  </eventStack.Navigator>
);
const familyStack = createStackNavigator();
const familyStackScreen = () => (
  <familyStack.Navigator>
    <familyStack.Screen
      name="Family screen"
      component={FamilyScreen}
      options={{title: 'Family'}}
    />
    <familyStack.Screen
      name="AddFamilyScreen"
      component={AddFamilyScreen}
      options={{title: 'Family'}}
    />
    <familyStack.Screen
      name="FamilyInfoScreen"
      component={FamilyInfoScreen}
      options={{title: 'Family Info'}}
    />
    <familyStack.Screen
      name="FixInfoScreen"
      component={FixInfoScreen}
      options={{title: 'Fix Info'}}
    />
  </familyStack.Navigator>
);
const genealogyStack = createStackNavigator();
const genealogyStackScreen = () => (
  <genealogyStack.Navigator>
    <genealogyStack.Screen
      name="GenealogyScreen"
      component={GenealogyScreen}
      options={{title: 'Genealogy'}}
    />
    <genealogyStack.Screen
      name="DisplayGenealogy"
      component={DisplayGenealogy}
      options={{title: 'Display Genealogy'}}
    />
    <genealogyStack.Screen
      name="Add Genealogy Screen"
      component={AddGenealogyScreen}
      options={{title: 'Add Genealogy'}}
    />
    <genealogyStack.Screen
      name="FixInfoGenealogy"
      component={FixInfoGenealogy}
      options={{title: 'Fix Info Genealogy'}}
    />
  </genealogyStack.Navigator>
);
const newsStack = createStackNavigator();
const newsStackScreen = () => (
  <newsStack.Navigator>
    <accountStack.Screen
      name="newsStack"
      component={NewsScreen}
      options={{title: 'NEWS'}}
    />
  </newsStack.Navigator>
);

//tao bottom bat
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      labeled="true"
      initialRouteName="Event"
      barStyle={{height: 50}}>
      <Tab.Screen
        name="Event"
        component={eventStackScreen}
        options={{
          tabBarLabel: 'Event',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Family"
        component={familyStackScreen}
        options={{
          tabBarLabel: 'Family',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={genealogyStackScreen}
        options={{
          tabBarLabel: 'Genealogy',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="file-tree"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewsScreen"
        component={newsStackScreen}
        options={{
          tabBarLabel: 'News',
          title: 'News',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={accountStackScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
