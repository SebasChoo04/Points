import React from 'react';
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import HouseScreen from "./HouseScreen"
import AnnouncementScreen from "./AnnouncementScreen"
import RankingScreen from "./RankingScreen"
import StepTrackerScreen from "./StepTrackerScreen"
import Login from "./Login";
import ChooseHouse from "./ChooseHouse";
import Splitter from "./Splitter";

const TabNavigator = createBottomTabNavigator({
  "Your House": {screen: HouseScreen},
  "Announcements": {screen: AnnouncementScreen},
  "Ranking": {screen: RankingScreen},
  "Step Tracker": {screen: StepTrackerScreen}
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: () => {
      const {routeName} = navigation.state
      switch (routeName) {
        case 'Your House':
          return(
            <Icon name={"home"} size={25}/>
          );
        case 'Announcements':
          return(
            <Icon name={"announcement"} size={25}/>
          );
        case "Ranking":
          return(
            <Icon2 name={"trophy"} size={25}/>
          );
        case "Step Tracker":
          return(
            <Icon name={"directions-walk"} size={25}/>
          )
      }
    }
  }),
  /*
  tabBarOptions: {
    style: {
      backgroundColor: '#66bb9b',
    },
    activeTintColor: '#1b5e20',
    inactiveTintColor: '#4c8c4a'
  }
  */
})

const Main = createStackNavigator({
  Splitter: {screen: Splitter},
  Login: {screen: Login},
  Tab: {screen: TabNavigator},
  ChooseHouse: {screen: ChooseHouse}
}, {
  headerMode: 'none'
});

export default createAppContainer(Main);