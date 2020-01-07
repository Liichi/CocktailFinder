import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from '../screens/index/index';
import SearchScreen from '../screens/search/search';

const AppNavigator = createStackNavigator({
    Index: IndexScreen,
    Search: SearchScreen
});

export default createAppContainer(AppNavigator);