import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import {Text, SafeAreaView} from 'react-native';
import BootSplash from 'react-native-bootsplash';

const App = () => {

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
