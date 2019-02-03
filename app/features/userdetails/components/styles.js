import { StyleSheet } from 'react-native';
import Colors from 'app/common/Colors';

export default StyleSheet.create({
  itemContainer: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 128,
    width: 128,
    borderRadius: 65,
    alignSelf: 'center'
  },
  tag: {
    color: Colors.white,
    backgroundColor: Colors.blueTag,
    paddingHorizontal: 8,
    borderRadius: 15
  },
  name: {
    margin: 16,
    alignSelf: 'center',
    color: Colors.grey
  },
  bio: {
    alignSelf: 'center',
    color: Colors.black,
    marginHorizontal: 16
  },
  detail: {
    color: Colors.black
  },
  link: {
    color: Colors.blueTag
  },
  flatList: { marginBottom: 64 }
});
