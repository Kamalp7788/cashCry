import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../utility/Images';

const data = [
  {
    image: Images.onlineIcon,
    title: 'Online',
  },
  {
    image: Images.offlineIcon,
    title: 'Off-line',
  },
  {
    image: Images.giftIcon,
    title: 'Gift Cards/ Brand Vouchers',
  },
];
const renderItem = ({item}) => (
  <TouchableOpacity style={styles.shoppingView}>
    <Image
      source={item.image}
      resizeMode="contain"
      style={styles.shoppingImg}
    />
    <Text style={styles.shoppintTxt}>{item.title}</Text>
  </TouchableOpacity>
);
const Shoppinglist = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Shoppinglist;

const styles = StyleSheet.create({
  shoppingView: {
    backgroundColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ffffff80',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  shoppintTxt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2E2E2E',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  shoppingImg: {
    height: 70,
    width: 70,
  },
});
