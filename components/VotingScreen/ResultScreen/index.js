import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Content, Grid, Row } from 'native-base';
import { scaleSize } from '../../styles/size';
import Estimates from '../Estimates';
import ResultEstimatePicker from './ResultEstimatePicker';
import AverageEstimate from './AverageEstimate';
import { getIsSessionHost } from '../../../store/selectors/user';
import StoryHeader from '../../StoryHeader';

const ResultScreen = ({ isHost }) => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, margin: scaleSize(10) }}>
        <Grid>
          <Row size={1}>
            <StoryHeader />
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
  isHost: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isHost: getIsSessionHost(state),
});

export default connect(mapStateToProps)(ResultScreen);
