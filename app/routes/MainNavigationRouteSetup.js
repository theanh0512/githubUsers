import { createStackNavigator } from 'react-navigation';
import Users from 'app/features/users/components/UserListScreen';

const usersNavigationRouteKeys = {
  Users: 'UserListScreen'
};

const routeConfig = {
  [`${usersNavigationRouteKeys.Users}`]: {
    screen: Users
  }
};

const usersNavigationConfig = {
  initialRouteName: `${usersNavigationRouteKeys.Users}`,
  mode: 'card',
  headerMode: 'screen'
};

export const UsersNavigation = createStackNavigator(
  routeConfig,
  usersNavigationConfig
);
