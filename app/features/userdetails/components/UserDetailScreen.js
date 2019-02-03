import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getUserDetail } from 'app/features/userdetails/actions/UserDetailAction';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/features/userdetails/components/styles';
import Colors from 'app/common/Colors';

export default class UserListScreen extends React.Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.username);
  }

  render() {
    const { userDetail } = this.props;

    return (
      <View style={{ backgroundColor: Colors.white }}>
        {userDetail && <SemiBoldText fontSize={16} text={userDetail.name} style={styles.header}/>}

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
  loadingUserDetail: state.userDetailReducer.loadingUserDetail,
  userDetail: state.userDetailReducer.userDetail,
  username: state.userDetailReducer.username
});

const mapDispatchToProps = {
  getUserDetail
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListScreen);
