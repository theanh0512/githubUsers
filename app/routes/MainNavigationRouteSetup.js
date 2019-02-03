import { createStackNavigator } from 'react-navigation';
import Users from 'app/features/users/components/UserListScreen';
import UserDetail from 'app/features/userdetails/components/UserDetailScreen';

const usersNavigationRouteKeys = {
  Users: 'UserListScreen',
  UserDetail: 'UserDetailScreen'
};

const routeConfig = {
  [`${usersNavigationRouteKeys.Users}`]: {
    screen: Users
  },
  [`${usersNavigationRouteKeys.UserDetail}`]: {
    screen: UserDetail
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
