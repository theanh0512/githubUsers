import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import NavigationBar from 'app/components/NavigationBar';
import { getUserDetail } from 'app/features/userdetails/actions/UserDetailAction';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/features/userdetails/components/styles';
import Colors from 'app/common/Colors';
import { RegularText } from 'app/components/CustomTexts';
import SeparatorLine from 'app/components/SeparatorLine';

export default class UserListScreen extends React.Component {
  componentDidMount() {
    this.props.getUserDetail(this.props.username);
  }

  render() {
    const { userDetail, loadingUserDetail } = this.props;

    return loadingUserDetail === true || !userDetail ? <ActivityIndicator/> : (
      <View style={{ backgroundColor: Colors.white, flex: 1 }}>
        <Image source={{ uri: userDetail.avatar_url }}
               style={styles.avatar}/>
        <SemiBoldText fontSize={16} text={userDetail.name} style={styles.name}/>
        <RegularText fontSize={16} text={userDetail.bio} style={styles.bio}/>
        <SeparatorLine style={{ margin: 16 }}/>
        <View style={styles.itemContainer}>
          <FontAwesome name="user" size={24} color={Colors.grey}/>
          <View style={{ marginLeft: 32 }}>
            <RegularText fontSize={16} text={userDetail.login} style={styles.detail}/>
            {userDetail.type !== 'User' && <SemiBoldText fontSize={14}
                                                         text={userDetail.type.toUpperCase()}
                                                         style={styles.tag}/>}
          </View>
        </View>

        {userDetail.location ? <View style={styles.itemContainer}>
          <MaterialIcons name="location-on" size={24} color={Colors.grey}/>
          <View style={{ marginLeft: 24 }}>
            <RegularText fontSize={16} text={userDetail.location} style={styles.detail}/>
          </View>
        </View> : null}

        {userDetail.blog ? <View style={styles.itemContainer}>
          <MaterialIcons name="link" size={24} color={Colors.grey}/>
          <View style={{ marginLeft: 24 }}>
            <RegularText fontSize={16} text={userDetail.blog} style={styles.link}/>
          </View>
        </View> : null}
      </View>
    );
  }
}

UserListScreen.navigationOptions = ({ navigation }) => ({
  header: () => (
    <NavigationBar
      navigation={navigation}
      showBackButton
      navigationTitle={""}
      white
      hideBottomBorder
      onBackButtonPress={() => {
        navigation.goBack();
      }}
    />
  )
});

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
