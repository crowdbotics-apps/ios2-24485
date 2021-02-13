import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList204558Navigator from '../features/NotificationList204558/navigator';
import Settings204557Navigator from '../features/Settings204557/navigator';
import Settings204549Navigator from '../features/Settings204549/navigator';
import UserProfile204547Navigator from '../features/UserProfile204547/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList204558: { screen: NotificationList204558Navigator },
Settings204557: { screen: Settings204557Navigator },
Settings204549: { screen: Settings204549Navigator },
UserProfile204547: { screen: UserProfile204547Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
