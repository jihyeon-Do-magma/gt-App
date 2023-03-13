/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

import Home from './src/page/Home';
import Portfolio from './src/page/Portfolio';
// import Nftgram from './src/page/Nftgram';
import Wallet from './src/page/Wallet';
import Mypage from './src/page/Mypage';
// import HallofFame from './src/page/HallofFame';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#fb8c00',
            // tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
            }}
          />
          <Tab.Screen
            name="Portfolio"
            component={Portfolio}
            options={{
              title: 'Portfolio',
            }}
          />
          {/* <Tab.Screen
            name="HallofFame"
            component={HallofFame}
            options={{
              title: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          /> */}
          {/* <Tab.Screen
            name="Nftgram"
            component={Nftgram}
            options={{
              title: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          /> */}
          <Tab.Screen
            name="MyPage"
            component={Mypage}
            options={{
              title: 'MyPage',
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              title: 'Wallet',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
