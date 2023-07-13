import React, {useCallback, useEffect, useMemo} from 'react';
import {View, Animated} from 'react-native';
import styles from './styles';

const Loader: React.FC = () => {
  const spinValue = useMemo(() => new Animated.Value(0), []);

  const spin = useCallback(() => {
    spinValue.setValue(0);

    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(spin);
  }, [spinValue]);

  useEffect(() => {
    spin();
  }, [spin]);

  const spinAnimation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.view}>
      <Animated.Image
        style={{transform: [{rotate: spinAnimation}]}}
        source={require('../../assets/images/loadingLogo.png')}
      />
    </View>
  );
};

export default Loader;
