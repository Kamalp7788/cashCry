import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import OnlineShoppingList from './OnlineShoppingList';

const ShoppingHeaderTab = ({value, source1, source2}) => {
  return (
    <View style={styles.bodyView}>
      <View style={styles.body}>
        <View style={styles.bellView}>
          <Image source={source1} style={styles.onlineIcon} />
        </View>
        <Text style={styles.onlineTxt}>{value}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.arrowView}>
          <Image source={source2} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingHeaderTab;

const styles = StyleSheet.create({
  bodyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    flexDirection: 'row',
  },
  nextIcon: {
    height: 12,
    width: 12,
  },
  onlineIcon: {
    height: 20,
    width: 20,
    margin: 8,
  },
  bellView: {
    height: 30,
    width: 30,
    backgroundColor: '#EBEBEB',
    margin: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  onlineTxt: {
    fontSize: 21,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#404040',
    margin: 6,
  },
  arrowView: {
    height: 25,
    width: 25,
    backgroundColor: '#ED1B24',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});
