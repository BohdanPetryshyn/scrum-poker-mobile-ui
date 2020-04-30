import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';

import { Content, H1 } from 'native-base';
import { getAverageEstimate } from '../../../store/selectors/session';

const AverageEstimate = ({ averageEstimate }) => {
  return (
    <Content>
      <H1>{`Average: ${averageEstimate}`}</H1>
    </Content>
  );
};

AverageEstimate.propTypes = {
  averageEstimate: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  averageEstimate: getAverageEstimate(state),
});

export default connect(mapStateToProps)(AverageEstimate);
