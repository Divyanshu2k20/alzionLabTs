import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';

import heart from '../../assets/png/heart.png';
import cart from '../../assets/png/cart.png';
import footprint from '../../assets/png/footprint.png';

import ListCardBg from '../../assets/svg/ListCardBg.tsx';

const API_LINK =
  'https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/';

export interface IData {
  bio: string;
  category: string;
  fertilizer: string;
  id: number;
  image: string;
  light: string;
  name: string;
  price: number;
  size: string;
  water: string;
}

interface ICardProps {
  item: IData;
  index: number;
}

interface IListProps {
  navigation: any;
}

const List: FC<IListProps> = props => {
  const {navigation} = props;
  const [list, setList] = useState<Array<IData>>([]);

  useEffect(() => {
    axios.get(API_LINK).then(items => {
      setList(items.data);
    });
  }, []);

  const renderCard = (renderProps: ICardProps) => {
    const {item} = renderProps;

    const onPress = () => {
      navigation.navigate('Item', item);
    };

    return (
      <Pressable onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <ListCardBg
              height={styles.card.height}
              width={Dimensions.get('screen').width}
              style={StyleSheet.absoluteFill}
            />

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{item.category}</Text>
              <Image source={footprint} />
            </View>

            <Text style={styles.nameText}>{item.name}</Text>

            <View style={styles.priceHeartContainer}>
              <Text style={styles.categoryText}>${item.price}</Text>
              <View style={styles.cartHeartContainer}>
                <Image source={cart} />
                <Image source={heart} />
              </View>
            </View>
          </View>
          <Image src={item.image} alt="logo" style={styles.cardImage} />
        </View>
      </Pressable>
    );
  };

  return <FlatList data={list} renderItem={renderCard} style={styles.list} />;
};

const styles = StyleSheet.create({
  card: {
    height: 177,
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 50,
  },
  cardContent: {
    width: '80%',
    height: '100%',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  priceText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    flex: 0.5,
  },
  cartHeartContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footprintIcon: {
    height: 20,
    width: 20,
  },
  nameText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 32,
  },
  list: {
    marginHorizontal: 10,
  },
  cardImage: {
    position: 'absolute',
    top: -60,
    right: -10,
    height: 229,
    width: 172,
    objectFit: 'scale-down',
  },
  priceHeartContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default List;
