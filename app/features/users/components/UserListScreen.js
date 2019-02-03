import React from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getUsers } from 'app/features/users/actions/UserListAction';

export default class UserListScreen extends React.Component {
  componentDidMount() {
    this.props.getUsers(0);
  }

  render() {
    const { users } = this.props;

    return (
      <View>
        <Text>{users.length > 0? users[0].login : 'empty'}</Text>
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

const mapStateToProps = state => ({
  loadingUserList: state.userReducer.loadingUserList,
  users: state.userReducer.users
});

const mapDispatchToProps = {
  getUsers
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListScreen);
