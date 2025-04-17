// Tempat Menaruh Navigation yang dimana memiliki 2
// Navigation Authenticated dan UnAuthenticated

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
// import SingIn from '../screens/SignIn/SingIn';
import Routes from './Routes';
import Signup from '../screens/Signup/Signup';
import Kasir from '../screens/Kasir/Kasir';
// import Home from '../screens/Home/Home';
// import Donate from '../screens/Donate/Donate';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../assets/colors/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons/faShoppingBag';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const bottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Routes.Kasir) {
            iconName = faShoppingBag;
            iconName === focused
              ? (color = colors.blue)
              : (color = colors.white);
          } else if (route.name === '...') {
          }

          // You can return any component that you like here!
          return (
            <FontAwesomeIcon icon={iconName} size={30} color={colors.blue} />
          );
        },
        header: () => {},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={Routes.Kasir} component={Kasir} />
    </Tab.Navigator>
  );
};

export const Authincated = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => {}}}>
      <Drawer.Screen name={Routes.Kasir} component={bottomNav} />
      <Drawer.Screen name={Routes.Login} component={Login} />
    </Drawer.Navigator>
  );
};

export const UnAuthicated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Kasir}
      screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={Signup} />
    </Stack.Navigator>
  );
};
