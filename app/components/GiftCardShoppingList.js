import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../utility/Images';

const GiftCardShoppingList = () => {
  const data1 = [
    {
      image: Images.amzonIcon,
      title: 'VOUCHERS',
      titleDesc: 'Deliveroo Giftcard',
      discount: 'up to 10% off',
      bgColor: '#E67E22',
    },
    {
      image: Images.deleverIcon,
      title: 'VOUCHERS',
      titleDesc: 'Deliveroo Giftcard',
      discount: 'up to 10% off',
      bgColor: '#3498DB',
    },
    {
      image: Images.amzonIcon,
      title: 'VOUCHERS',
      titleDesc: 'Deliveroo Giftcard',
      discount: 'up to 10% off',
      bgColor: '#E74C3C',
    },
  ];
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[styles.giftBody, {backgroundColor: item.bgColor}]}>
      <Image source={item.image} style={styles.amzonImg} />
      <Text style={styles.txt1}>{item.title}</Text>
      <Text style={styles.txt2}>{item.titleDesc}</Text>
      <Text style={styles.txt3}>{item.discount}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data1}
      horizontal
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default GiftCardShoppingList;

const styles = StyleSheet.create({
  giftBody: {
    height: 103,
    width: 106,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 16,
  },
  amzonImg: {
    height: 30,
    width: 90,
    alignSelf: 'center',
    margin: 8,
  },
  txt1: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  txt2: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  txt3: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
});
