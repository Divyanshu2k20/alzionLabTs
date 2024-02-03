import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import React from 'react';

import cart from '../../assets/png/cart.png';
import heart from '../../assets/png/heart.png';
import footprint from '../../assets/png/footprint.png';

import ItemCardBg from '../../assets/svg/ItemCardBg.tsx';
import {IData} from '../list/List.tsx';

interface IItemProps {
  route: {params: IData};
}

const Item = (props: IItemProps) => {
  const {image, name, category, price, size} = props.route.params;
  return (
    <View style={styles.container}>
      <ItemCardBg
        width={Dimensions.get('screen').width}
        height={Dimensions.get('screen').height}
        style={styles.background}
      />
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.categoryText}>{category}</Text>
          <Image source={footprint} />
        </View>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View>
        <Text style={styles.priceSizeHeading}>Price:</Text>
        <Text>{price}</Text>
      </View>
      <View>
        <Text style={styles.priceSizeHeading}>Size:</Text>
        <Text>{size}</Text>
      </View>
      <View style={styles.footer}>
        <Image source={cart} style={styles.cartImage} />
        <View style={styles.heartContainer}>
          <Image source={heart} />
        </View>
      </View>

      <Image src={image} style={styles.productImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '72%',
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
  },
  background: {position: 'absolute', top: 0},
  nameText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 45,
  },
  categoryText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginRight: 10,
  },
  cartImage: {
    marginHorizontal: 20,
  },

  heartContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    // flexDirection: 'row',
    // height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  },

  footer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  priceSizeHeading: {
    fontFamily: 'Poppins-SemiBold',
    color: '#002140',
    fontSize: 18,
  },

  title: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  productImage: {
    position: 'absolute',
    right: -30,
    bottom: 20,
    height: '70%',
    width: '80%',
  },
});

export default Item;
