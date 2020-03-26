import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import MainSreen from './pages/Main';
import LoginScreen from './pages/Login'


export default createAppContainer(
    createStackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                //title: 'voltar',
                headerShown: false,
            },
            options: {
                animationEnabled: false,
            }
        },
        Main: {
            screen: MainSreen,
            navigationOptions: {
                //title: 'voltar',
                headerShown: false,
            },
            options: {
                animationEnabled: false,
            }
        }
    }),
  );