import {Image, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.view}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
};

export default Header;
