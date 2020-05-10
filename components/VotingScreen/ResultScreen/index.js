import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Col,
  Container,
  Content,
  Grid,
  H1,
  Item,
  Label,
  Row,
  Text,
} from 'native-base';
import { scaleSize } from '../../styles/size';
import Estimates from '../Estimates';
import {
  getVotingStoryDescription,
  getVotingStorySummary,
} from '../../../store/selectors/session';
import ResultEstimatePicker from './ResultEstimatePicker';
import AverageEstimate from './AverageEstimate';
import { getIsSessionHost } from '../../../store/selectors/user';

const ResultScreen = ({ storySummary, storyDescription, isHost }) => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, margin: scaleSize(10) }}>
        <Grid>
          <Row size={1}>
            <Col size={1} />
            <Col size={4}>
              <H1>{storySummary}</H1>
              <Text>{storyDescription}</Text>
            </Col>
          </Row>
          <Row size={6}>
            <Estimates />
          </Row>
          <Row
            size={2}
            style={{
              alignItems: 'flex-start',
            }}
          >
            {isHost ? <ResultEstimatePicker /> : <AverageEstimate />}
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

ResultScreen.propTypes = {
  storySummary: PropTypes.string.isRequired,
  storyDescription: PropTypes.string.isRequired,
  isHost: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  storySummary: getVotingStorySummary(state),
  storyDescription: getVotingStoryDescription(state),
  isHost: getIsSessionHost(state),
});

export default connect(mapStateToProps)(ResultScreen);
