import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, H2 } from 'native-base';
import { getVotingFinishTime } from '../../../store/selectors/estimatingScreen';

const SECOND_MILLIS = 1000;
const MINUTE_MILLIS = SECOND_MILLIS * 60;

const getTimeDiff = (now, end) => {
  let millisecondsDiff = end - now;
  const minutes = Math.floor(millisecondsDiff / MINUTE_MILLIS);
  millisecondsDiff -= minutes * MINUTE_MILLIS;
  const seconds = Math.floor(millisecondsDiff / SECOND_MILLIS);
  return [minutes, seconds];
};

const VotingCountDown = ({ votingFinishTime }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  });

  const [minutes, seconds] = getTimeDiff(now, votingFinishTime);

  return (
    <Container>
      <H2>{`${minutes}:${seconds}`}</H2>
    </Container>
  );
};

VotingCountDown.propTypes = {
  votingFinishTime: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  votingFinishTime: getVotingFinishTime(state),
});

export default connect(mapStateToProps)(VotingCountDown);
