/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

import Home from './src/page/Home';
import Portfolio from './src/page/Portfolio';
import Wallet from './src/page/Wallet';
import Mypage from './src/page/Mypage';
import Nftgram from './src/page/Nftgram';
import HallofFame from './src/page/HallofFame';

const logo = require('./images/logoBeta.png');

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const headerLeft = onPress => (
  <View onPress={onPress}>
    <Image
      source={logo}
      style={{width: 150, height: 40, marginLeft: 10, marginRight: 10}}
    />
  </View>
);

const headerTitle = () => <></>;

const headerRight = () => (
  <View>
    <Text>Right</Text>
  </View>
);

const tabIcon = (name, color, size) => (
  <Icon name={name} color={color} size={size} />
);

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5445fc',
        // tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({color, size}) => {
            return tabIcon('home', color, size);
          },
          headerLeft: ({onPress}) => {
            return headerLeft(onPress);
          },
          headerTitle: () => {
            return headerTitle();
          },
          headerRight: () => {
            return headerRight();
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          title: 'Portfolio',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({color, size}) => {
            return tabIcon('contacts', color, size);
          },
          headerLeft: ({onPress}) => {
            return headerLeft(onPress);
          },
          headerTitle: () => {
            return headerTitle();
          },
          headerRight: () => {
            return headerRight();
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Wallet',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({color, size}) => {
            return tabIcon('wallet', color, size);
          },
          headerLeft: ({onPress}) => {
            return headerLeft(onPress);
          },
          headerTitle: ({children}) => {
            return headerTitle(children);
          },
          headerRight: () => {
            return headerRight();
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={Mypage}
        options={{
          title: 'MyPage',
          headerStyle: {
            backgroundColor: '#000',
          },
          tabBarIcon: ({color, size}) => {
            return tabIcon('user', color, size);
          },
          headerLeft: ({onPress}) => {
            return headerLeft(onPress);
          },
          headerTitle: ({children}) => {
            return headerTitle(children);
          },
          headerRight: () => {
            return headerRight();
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink', paddingTop: 30}}>
      <StatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="bottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="HallofFame" component={HallofFame} />
          <Stack.Screen name="Nftgram" component={Nftgram} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
