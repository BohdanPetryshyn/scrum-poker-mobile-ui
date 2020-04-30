import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Container, List, ListItem, Left, Right, Text } from 'native-base';

import Estimate from '../../store/models/Estimate';
import { RESULT, VOTING } from '../../store/models/sessionState';
import {
  getSessionStage,
  getUserEstimates,
} from '../../store/selectors/session';

const renderCard = card => card || '--';

const Estimates = ({ estimates, stage }) => {
  return (
    <Container>
      <List>
        {estimates.map(estimate => {
          console.log('ESTIMATE', estimate);
          return (
            <ListItem key={estimate.user.username} selected={!!estimate.card}>
              <Left>
                <Text>{estimate.user.username}</Text>
              </Left>
              <Right>
                <Text>{stage === RESULT ? renderCard(estimate.card) : ''}</Text>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

Estimates.propTypes = {
  estimates: ImmutablePropTypes.listOf(ImmutablePropTypes.recordOf(Estimate))
    .isRequired,
  stage: PropTypes.oneOf([VOTING, RESULT]).isRequired,
};

const mapStateToProps = state => ({
  estimates: getUserEstimates(state),
  stage: getSessionStage(state),
});

export default connect(mapStateToProps)(Estimates);
