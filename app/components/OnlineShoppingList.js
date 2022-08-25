import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../utility/Images';

const OnlineShoppingList = ({}) => {
  const DATA = [
    {
      image: Images.amzonIcon,
      title: 'up to 10% Cashback',
      bgColor: '#04529E',
    },
    {
      image: Images.deleverIcon,
      title: 'up to 8% Cashback',
      bgColor: '#3498DB',
    },
    {
      image: Images.fareIcon,
      title: 'up to 10% Cashback',
      bgColor: '#F28B1C',
    },
  ];
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={[styles.shoppingBody, {backgroundColor: item.bgColor}]}>
      <Image
        source={item.image}
        style={styles.amzonIcon}
        resizeMode="contain"
      />
      <View style={styles.txtView}>
        <Text style={styles.txt}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default OnlineShoppingList;

const styles = StyleSheet.create({
  shoppingBody: {
    height: 96,
    width: 106,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 16,
  },
  amzonIcon: {
    height: 30,
    width: 80,
    marginHorizontal: 12,
    marginTop: 10,
  },
  txtView: {
    height: 36,
    width: 85,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txt: {
    fontWeight: '700',
    color: '#2E2E2E',
    fontFamily: 'Poppins',
  },
});
