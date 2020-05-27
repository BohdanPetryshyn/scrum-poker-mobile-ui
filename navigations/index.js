import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';
import SessionNavigator from './SessionNavigator';
import { getIsSessionStarted } from '../store/selectors/session';
import { navigationRef } from './externalNavigators';

const Navigator = ({ isSessionStarted }) => (
  <NavigationContainer ref={navigationRef}>
    {isSessionStarted ? <SessionNavigator /> : <HomeNavigator />}
  </NavigationContainer>
);

Navigator.propTypes = {
  isSessionStarted: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isSessionStarted: getIsSessionStarted(state),
});

export default connect(mapStateToProps)(Navigator);

export * from './externalNavigators';
