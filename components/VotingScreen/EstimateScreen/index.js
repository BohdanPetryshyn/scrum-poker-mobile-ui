import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Grid, Col, Row, H1, Text } from 'native-base';
import { scaleSize } from '../../styles/size';
import VotingCountDown from './VotingCountDown';
import {
  getStoryDescription,
  getStorySummary,
} from '../../../store/selectors/estimatingScreen';

const EstimateScreen = ({ storySummary, storyDescription }) => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, margin: scaleSize(10) }}>
        <Grid>
          <Row size={1}>
            <Col size={1}>
              <VotingCountDown />
            </Col>
            <Col size={4}>
              <H1>{storySummary}</H1>
              <Text>{storyDescription}</Text>
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

EstimateScreen.propTypes = {
  storySummary: PropTypes.string.isRequired,
  storyDescription: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  storySummary: getStorySummary(state),
  storyDescription: getStoryDescription(state),
});

export default connect(mapStateToProps)(EstimateScreen);
