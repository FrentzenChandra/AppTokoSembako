// Tempat Menaruh Navigation yang dimana memiliki 2
// Navigation Authenticated dan UnAuthenticated

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
// import SingIn from '../screens/SignIn/SingIn';
import Routes from './Routes';
import Signup from '../screens/Signup/Signup';
// import Home from '../screens/Home/Home';
// import Donate from '../screens/Donate/Donate';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNav from './BottomNavigation';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const Authincated = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => {}}}>
      <Drawer.Screen name={Routes.Kasir} component={BottomNav} />
      <Drawer.Screen name={Routes.Produk} component={BottomNav} />

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
