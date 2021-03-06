import { StyleSheet } from 'react-native';
import Colors from 'app/common/Colors';

export default StyleSheet.create({
  itemContainer: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    height: 64,
    width: 64,
    borderRadius: 30
  },
  tag: {
    color: Colors.white,
    backgroundColor: Colors.blueTag,
    paddingHorizontal: 8,
    borderRadius: 10,
    overflow: 'hidden'
  },
  header: {
    margin: 16,
    color: Colors.grey
  },
  flatList: { marginBottom: 64 },
  noDataView: {
    alignItems: 'center',
    marginTop: 160
  }
});
