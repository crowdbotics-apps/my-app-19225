import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen587803Navigator from '../features/BlankScreen587803/navigator';
import BlankScreen487802Navigator from '../features/BlankScreen487802/navigator';
import BlankScreen387801Navigator from '../features/BlankScreen387801/navigator';
import BlankScreen287800Navigator from '../features/BlankScreen287800/navigator';
import BlankScreen187799Navigator from '../features/BlankScreen187799/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen587803: { screen: BlankScreen587803Navigator },
BlankScreen487802: { screen: BlankScreen487802Navigator },
BlankScreen387801: { screen: BlankScreen387801Navigator },
BlankScreen287800: { screen: BlankScreen287800Navigator },
BlankScreen187799: { screen: BlankScreen187799Navigator },

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
