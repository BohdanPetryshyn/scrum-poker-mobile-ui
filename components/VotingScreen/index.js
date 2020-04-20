import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getIsSessionHost,
  getSessionStage,
} from '../../store/selectors/session';
import { WAITING, VOTING, RESULT } from '../../store/models/sessionState';
import ResultScreen from './ResultScreen';
import CreateStoryScreen from './CreateStoryScreen';
import WaitingScreen from './WaitingScreen';

const VotingScreen = ({ sessionStage, isSessionHost }) => {
  if (sessionStage === VOTING) {
    return <VotingScreen />;
  }

  if (sessionStage === RESULT) {
    return <ResultScreen />;
  }

  if (isSessionHost) {
    return <CreateStoryScreen />;
  }

  return <WaitingScreen />;
};

VotingScreen.propTypes = {
  sessionStage: PropTypes.string.isRequired,
  isSessionHost: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  sessionStage: getSessionStage(state),
  isSessionHost: getIsSessionHost(state),
});

export default connect(mapStateToProps)(VotingScreen);
