import React, { Component } from 'react';
import { setTopLevelNavigator } from 'app/utils/NavigationUtil';
import { UsersNavigation } from 'app/routes/MainNavigationRouteSetup';

export default class AppHome extends Component {
  render() {
    return (
      <UsersNavigation
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
