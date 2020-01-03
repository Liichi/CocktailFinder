import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from '../screens/index';

const AppNavigator = createStackNavigator({
    Index: IndexScreen
});

export default createAppContainer(AppNavigator);