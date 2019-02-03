import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getUsers } from 'app/features/users/actions/UserListAction';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/features/users/components/styles';
import Colors from 'app/common/Colors';

export default class UserListScreen extends React.Component {
  componentDidMount() {
    this.props.getUsers(0);
  }

  renderInnerItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.avatar_url }}
               style={styles.avatar}/>
        <View style={{ marginLeft: 16 }}>
          <SemiBoldText fontSize={16} text={item.login}/>
          {item.type !== 'User' && <SemiBoldText fontSize={16}
                                                 text={item.type}
                                                 style={styles.tag}/>}
        </View>
      </TouchableOpacity>
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
        />
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
