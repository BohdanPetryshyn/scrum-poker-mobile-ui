import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';
import { Share } from 'react-native';
import { getUsername } from '../store/selectors/user';
import { getSessionId, getSessionTopic } from '../store/selectors/session';

const invitationMessage = (sessionId, sessionTopic, username) => `
Hi there!
${username} is inviting you to SCRUM poker session "${sessionTopic}"!
Join the session using session ID ${sessionId} 
`;

const ShareSessionButton = ({ username, sessionTopic, sessionId }) => {
  const shareSessionInvitation = () => {
    Share.share({
      message: invitationMessage(sessionId, sessionTopic, username),
    });
  };

  return (
    <Button onPress={shareSessionInvitation}>
      <Icon name="share" />
    </Button>
  );
};

ShareSessionButton.propTypes = {
  username: PropTypes.string.isRequired,
  sessionTopic: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  username: getUsername(state),
  sessionTopic: getSessionTopic(state),
  sessionId: getSessionId(state),
});

export default connect(mapStateToProps)(ShareSessionButton);
