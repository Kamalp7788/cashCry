import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import GiftCardHeader from '../components/GiftCardHeader';
import Shoppinglist from '../components/Shoppinglist';
import {Images} from '../utility/Images';
import OnlineShoppingList from '../components/OnlineShoppingList';
import GiftCardShoppingList from '../components/GiftCardShoppingList';
import ShoppingHeaderTab from '../components/ShoppingHeaderTab';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <GiftCardHeader />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.containertxt1}>Parsley Montana</Text>
            <Text style={styles.containertxt2} numberOfLines={2}>
              Withdrawing your lifetime earnings in Cashcry
            </Text>
            <View style={styles.row1}>
              <Text style={styles.txt3}>₹</Text>
              <Text style={styles.price}>200.00</Text>
            </View>
          </View>
          <View style={styles.bagIconView}>
            <Image source={Images.bagIcon} style={styles.bagIcon} />
          </View>
        </View>
        <View>
          <Shoppinglist />
        </View>
        <TouchableOpacity activeOpacity={1}>
          <Image source={Images.backgroundIcon} style={styles.backgroundImg} />
        </TouchableOpacity>
        <View style={styles.appContainer1}>
          <ShoppingHeaderTab
            value={'Online Shopping'}
            source1={Images.onlineIcon}
            source2={Images.nextIcon}
          />
          <OnlineShoppingList />
        </View>
        <TouchableOpacity>
          <Image source={Images.bgcolorIcon} style={styles.bgcolorIcon} />
        </TouchableOpacity>
        <View style={styles.appContainer1}>
          <ShoppingHeaderTab
            value={'Gift Cards/Brand Vouchers'}
            source1={Images.giftIcon}
            source2={Images.nextIcon}
          />
          <GiftCardShoppingList />
        </View>
        <View style={styles.appContainer1}>
          <ShoppingHeaderTab
            value={'Off-line Shopping'}
            source1={Images.offlineIcon}
            source2={Images.nextIcon}
          />
          <OnlineShoppingList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  appContainer1: {
    height: 170,
    borderWidth: 1,
    margin: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#E0E0E0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: '#FEF6D3',
    flexDirection: 'row',
    height: 100,
    marginHorizontal: 12,
  },
  containertxt1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins',
  },
  containertxt2: {
    fontSize: 16,
    color: '#707070',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  txt3: {
    fontSize: 20,
    color: '#F28B1C',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    margin: 4,
  },
  backgroundImg: {
    marginHorizontal: 16,
    marginTop: 12,
    width: '92%',
  },
  bodyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fff',
    marginHorizontal: 16,
  },
  body: {
    flexDirection: 'row',
  },
  row1: {
    flexDirection: 'row',
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
  bgcolorIcon: {
    marginTop: 6,
    marginHorizontal: 12,
    width: '92%',
  },
  giftView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
  },
  offlineGift: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 12,
  },
  bagImg: {
    height: 100,
    width: 100,
  },
  bagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bagIcon: {
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 0,
    right: -11,
  },
  bagIconView: {
    alignSelf: 'flex-end',
    margin: 8,
    marginHorizontal: 8,
  },
});
