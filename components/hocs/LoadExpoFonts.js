import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf';

const LoadExpoFonts = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
      ...Ionicons.font,
    }).then(() => setIsLoaded(true));
  }, []);

  return isLoaded ? children : <AppLoading />;
};

LoadExpoFonts.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoadExpoFonts;
