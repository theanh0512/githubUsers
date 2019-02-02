import React from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';

export default class UserListScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> hello </Text>
      </View>
    );
  }
}

UserListScreen.navigationOptions = {
  header: ({ navigation }) => (
    <NavigationBar
      navigation={navigation}
      navigationTitle={"GitHub Users"}
      grey
    />
  )
};
