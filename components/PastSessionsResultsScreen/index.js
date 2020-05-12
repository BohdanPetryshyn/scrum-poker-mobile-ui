import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  ListItem,
  Text,
  Left,
  Right,
  List,
} from 'native-base';
import PastVotingResult from '../../store/models/PastVotingResult';
import { getPastVotingResults } from '../../store/selectors/pastSessionResultsScreen';

const toSessionListGroup = (sessionVotingResults, sessionId) => {
  const sessionTopic = sessionVotingResults.first().get('sessionTopic');
  const listGroupHeader = (
    <ListItem itemDivider key={sessionId}>
      <Text>{`${sessionId.slice(0, 6)} - `}</Text>
      <Text style={{ fontWeight: 'bold' }}>{sessionTopic}</Text>
    </ListItem>
  );

  const votingResultListItems = sessionVotingResults.map(votingResult => (
    <ListItem key={`${sessionId}|${votingResult.storyId}`}>
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
    .map(toSessionListGroup)
    .valueSeq();

  return (
    <Container>
      <Content>
        <List>{votingResultListItems}</List>
      </Content>
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
