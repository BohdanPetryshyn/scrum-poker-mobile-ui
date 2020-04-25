import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Grid,
  Col,
  Row,
  H1,
  Text,
  Item,
  Label,
} from 'native-base';
import { scaleSize } from '../../styles/size';
import VotingCountDown from './VotingCountDown';
import EstimatePicker from './EstimatePicker';
import {
  getVotingStoryDescription,
  getVotingStorySummary,
} from '../../../store/selectors/session';
import Estimates from './Estimates';

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
          <Row size={7}>
            <Estimates />
          </Row>
          <Row
            size={1}
            style={{
              alignItems: 'flex-start',
            }}
          >
            <Item style={{ width: '100%' }}>
              <Label>Your Estimate</Label>
              <EstimatePicker />
            </Item>
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
  storySummary: getVotingStorySummary(state),
  storyDescription: getVotingStoryDescription(state),
});

export default connect(mapStateToProps)(EstimateScreen);
