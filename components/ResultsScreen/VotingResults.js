import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Left, List, ListItem, Right, Text } from 'native-base';
import { getVotingResults } from '../../store/selectors/session';

const VotingResults = ({ votingResults }) => {
  return (
    <Container>
      <List>
        {votingResults.map(votingResult => {
          return (
            <ListItem key={votingResult.votingId}>
              <Left>
                <Text>{votingResult.storySummary}</Text>
              </Left>
              <Right>
                <Text>{votingResult.resultCard}</Text>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

VotingResults.propTypes = {
  votingResults: PropTypes.arrayOf(
    PropTypes.shape({
      votingId: PropTypes.string.isRequired,
      storySummary: PropTypes.string.isRequired,
      resultCard: PropTypes.string.isRequired,
    }).isRequired
  ),
};

const mapStateToProps = state => ({
  votingResults: getVotingResults(state),
});

export default connect(mapStateToProps)(VotingResults);