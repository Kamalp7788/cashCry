import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../utility/Images';

const GiftCardHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={Images.titleIcon} style={styles.titleIcon} />
      <View style={styles.searchView}>
        <TextInput
          placeholder="Search for products or store..."
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Image
            source={Images.searchIcon}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={Images.bellIcon} style={styles.bellIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.indicator}>
        <Text style={styles.indicatorText}>10</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GiftCardHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    padding: 12,
    backgroundColor: '#ffffff',
  },
  titleIcon: {
    height: 26,
    width: 90,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#bcbcbc',
    fontSize: 14,
  },
  searchIcon: {
    bottom: 26,
    left: 200,
    height: 14,
  },
  searchView: {
    width: 230,
    marginHorizontal: 10,
  },
  bellIcon: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
  indicator: {
    backgroundColor: '#DD6475',
    height: 16,
    width: 26,
    borderRadius: 8,
    bottom: 5,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
