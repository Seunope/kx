import { StackNavigator} from 'react-navigation';
import SignupScreen from './src/auth/signup';
import LoginScreen from './src/auth/login';
import WelcomeScreen from './src/welcome';


const KarisNavigation = StackNavigator(
  {
    Welcome: { screen: WelcomeScreen,  navigationOptions:{header: null} },
    Signup: { screen: SignupScreen, navigationOptions: {title: 'Sign up', headerStyle:{backgroundColor: '#2980b9'},headerTintColor: '#fff',} },
//    Login: { screen: LoginScreen, navigationOptions: {headerStyle:{backgroundColor: '#2980b9'},headerTintColor: '#fff',}},

  }
);
export default KarisNavigation;