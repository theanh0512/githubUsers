import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getUsers, setSelectedUser } from 'app/features/users/actions/UserListAction';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/features/users/components/styles';
import Colors from 'app/common/Colors';
import { RegularText } from '../../../components/CustomTexts';

export default class UserListScreen extends React.Component {
  componentDidMount() {
    this.props.getUsers(0);
  }

  handleShowUserDetails = item => {
    // Set selected item for user detail screen
    this.props.setSelectedUser(item.login);
    // Show user details screen
    this.props.navigation.push('UserDetailScreen');
  };

  renderInnerItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}
                        onPress={() => {
                          this.handleShowUserDetails(item);
                        }}>
        <Image source={{ uri: item.avatar_url }}
               style={styles.avatar}/>
        <View style={{ marginLeft: 16 }}>
          <SemiBoldText fontSize={16} text={item.login}/>
          {item.type !== 'User' && <SemiBoldText fontSize={14}
                                                 text={item.type.toUpperCase()}
                                                 style={styles.tag}/>}
        </View>
      </TouchableOpacity>
    );
  };

  renderEmptyContainer = () => {
    return (
      <View style={styles.noDataView}>
        <RegularText fontSize={16}
                     text="No users have been loaded"
                     style={{ color: Colors.black }}/>
      </View>
    );
  };

  render() {
    const { users } = this.props;

    return (
      <View style={{ backgroundColor: Colors.white }}>
        <SemiBoldText fontSize={16} text="Users" style={styles.header}/>
        <FlatList
          style={styles.flatList}
          data={users}
          renderItem={this.renderInnerItem}
          keyExtractor={(itm, idx) => idx.toString()}
          ListEmptyComponent={this.renderEmptyContainer}
        />
      </View>
    );
  }
}

UserListScreen.navigationOptions = ({ navigation }) => ({
  header: () => (
    <NavigationBar
      navigation={navigation}
      navigationTitle={"GitHub Users"}
      grey
    />
  )
});

const mapStateToProps = state => ({
  loadingUserList: state.userReducer.loadingUserList,
  users: state.userReducer.users
});

const mapDispatchToProps = {
  getUsers, setSelectedUser
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListScreen);
