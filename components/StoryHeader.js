import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, H1, Text } from 'native-base';
import {
  getVotingStoryDescription,
  getVotingStorySummary,
} from '../store/selectors/session';

const StoryHeader = ({ storySummary, storyDescription }) => (
  <Col>
    <H1>{storySummary}</H1>
    <Text>{storyDescription}</Text>
  </Col>
);

StoryHeader.propTypes = {
  storySummary: PropTypes.string.isRequired,
  storyDescription: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  storySummary: getVotingStorySummary(state),
  storyDescription: getVotingStoryDescription(state),
});

export default connect(mapStateToProps)(StoryHeader);
