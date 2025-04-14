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

const Stack = createNativeStackNavigator();

// export const Authincated = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName={Routes.Home}
//       screenOptions={{header: () => {}}}>
//       <Stack.Screen name={Routes.Home} component={Home} />
//     </Stack.Navigator>
//   );
// };

export const UnAuthicated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Kasir}
      screenOptions={{header: () => {}}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SignUp} component={Signup} />

      {/* dibawah ini page Authincated */}
      <Stack.Screen name={Routes.Kasir} component={Kasir}></Stack.Screen>
    </Stack.Navigator>
  );
};
