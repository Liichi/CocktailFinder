import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from '../screens/index';
import SearchScreen from '../screens/search';

const AppNavigator = createStackNavigator({
    Index: IndexScreen,
    Search: SearchScreen
});

export default createAppContainer(AppNavigator);