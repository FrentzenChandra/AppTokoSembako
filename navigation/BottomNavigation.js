import Routes from './Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../assets/colors/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import Kasir from '../screens/Kasir/Kasir';
import {faRectangleList} from '@fortawesome/free-regular-svg-icons/faRectangleList';
import Produk from '../screens/Produk/Produk';
import Checkout from '../screens/Checkout/Checkout';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Produk}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === Routes.Kasir) {
            iconName = faShoppingBag;
          } else if (route.name === Routes.Produk) {
            iconName = faRectangleList;
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
      <Tab.Screen name={Routes.Produk} component={Produk} />
    </Tab.Navigator>
  );
};

export default BottomNav;
