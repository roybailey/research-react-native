import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screen/SearchScreen';
import DetailScreen from './src/screen/DetailScreen';

const navigator = createStackNavigator({
    Search: SearchScreen,
    Detail: DetailScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
});

export default createAppContainer(navigator);
