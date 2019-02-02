import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import SeparatorLine from 'app/components/SeparatorLine';
import NavigationMenuButton from 'app/components/NavigationMenuButton';
import CloseSvg from 'app/resources/svg/close';
import Colors from 'app/common/Colors';
import { SemiBoldText } from 'app/components/CustomTexts';

const style = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: Colors.white
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16
  },
  leftMenuButton: {
    height: 24,
    width: 24
  },
  rightMenuButton: {
    height: 24,
    width: 24
  },
  navigationTitle: {
    flex: 1,
    color: Colors.black,
    marginLeft: 16,
    marginRight: 16
  }
});

const handleOnLeftMenuPress = (
  navigation,
  menuIsBackButton,
  backButtonEventHandler
) => {
  if (menuIsBackButton) {
    if (!backButtonEventHandler) return;

    backButtonEventHandler();
  } else {
    // Handle hamburger menu click
    navigation.openDrawer();
  }
};

const NavigationBar = ({
                         navigation, navigationTitle, showBackButton, onBackButtonPress,
                         showRefreshButton, onRefreshButtonPress, hideBottomBorder, grey
                       }) => (
  <View
    style={[
      style.container,
      grey
        ? { backgroundColor: Colors.greyLight }
        : { backgroundColor: Colors.white }
    ]}
  >
    <View style={style.innerContainer}>
      <NavigationMenuButton
        handleMenuButtonPress={() => {
          handleOnLeftMenuPress(navigation, showBackButton, onBackButtonPress);
        }}
        buttonImageElement={
          showBackButton ? (
            <CloseSvg style={style.leftMenuButton}/>
          ) : null
        }
      />
      <SemiBoldText
        style={style.navigationTitle}
        fontSize={16}
        text={navigationTitle}
      />
    </View>
    {!hideBottomBorder ? <SeparatorLine/> : null}
  </View>
);

NavigationBar.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func
  }).isRequired,
  navigationTitle: PropTypes.string,
  showBackButton: PropTypes.bool,
  showRefreshButton: PropTypes.bool,
  onRefreshButtonPress: PropTypes.func,
  onBackButtonPress: PropTypes.func,
  hideBottomBorder: PropTypes.bool,
  grey: PropTypes.bool
};

module.exports = NavigationBar;
