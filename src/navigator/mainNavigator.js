import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen691850Navigator from '../features/BlankScreen691850/navigator';
import BlankScreen591849Navigator from '../features/BlankScreen591849/navigator';
import BlankScreen491848Navigator from '../features/BlankScreen491848/navigator';
import BlankScreen391847Navigator from '../features/BlankScreen391847/navigator';
import BlankScreen291846Navigator from '../features/BlankScreen291846/navigator';
import BlankScreen1387826Navigator from '../features/BlankScreen1387826/navigator';
import BlankScreen1287825Navigator from '../features/BlankScreen1287825/navigator';
import BlankScreen1087808Navigator from '../features/BlankScreen1087808/navigator';
import BlankScreen887807Navigator from '../features/BlankScreen887807/navigator';
import BlankScreen987806Navigator from '../features/BlankScreen987806/navigator';
import BlankScreen787805Navigator from '../features/BlankScreen787805/navigator';
import BlankScreen687804Navigator from '../features/BlankScreen687804/navigator';
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
BlankScreen691850: { screen: BlankScreen691850Navigator },
BlankScreen591849: { screen: BlankScreen591849Navigator },
BlankScreen491848: { screen: BlankScreen491848Navigator },
BlankScreen391847: { screen: BlankScreen391847Navigator },
BlankScreen291846: { screen: BlankScreen291846Navigator },
BlankScreen1387826: { screen: BlankScreen1387826Navigator },
BlankScreen1287825: { screen: BlankScreen1287825Navigator },
BlankScreen1087808: { screen: BlankScreen1087808Navigator },
BlankScreen887807: { screen: BlankScreen887807Navigator },
BlankScreen987806: { screen: BlankScreen987806Navigator },
BlankScreen787805: { screen: BlankScreen787805Navigator },
BlankScreen687804: { screen: BlankScreen687804Navigator },
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
