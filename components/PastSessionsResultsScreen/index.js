import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Container, Content, ListItem, Text, Left, Right } from 'native-base';
import PastVotingResult from '../../store/models/PastVotingResult';
import { getPastVotingResults } from '../../store/selectors/pastSessionResultsScreen';

const toSessionListGroup = (sessionVotingResults, sessionId) => {
  const sessionTopic = sessionVotingResults.first().get('sessionTopic');
  const listGroupHeader = (
    <ListItem itemDivider>
      <Text>{`${sessionId.slice(0, 6)} - ${sessionTopic}`}</Text>
    </ListItem>
  );

  const votingResultListItems = sessionVotingResults.map(votingResult => (
    <ListItem key={`${sessionId}|${votingResult.resultCard}`}>
      <Left>
        <Text>{votingResult.storySummary}</Text>
      </Left>
      <Right>
        <Text>{votingResult.resultCard}</Text>
      </Right>
    </ListItem>
  ));

  return votingResultListItems.unshift(listGroupHeader);
};

const PastSessionsResultsScreen = ({ votingResults }) => {
  const votingResultListItems = votingResults
    .groupBy(votingResult => votingResult.sessionId)
    .flatMap(toSessionListGroup)
    .toArray();

  return (
    <Container>
      <Content>{votingResultListItems}</Content>
    </Container>
  );
};

PastSessionsResultsScreen.propTypes = {
  votingResults: ImmutablePropTypes.listOf(
    ImmutablePropTypes.recordOf(PastVotingResult)
  ).isRequired,
};

const mapStateToProps = state => ({
  votingResults: getPastVotingResults(state),
});

export default connect(mapStateToProps)(PastSessionsResultsScreen);
