import React from 'react';
import { Container, Content } from 'native-base';
import VotingResults from './VotingResults';

const ResultsScreen = () => {
  return (
    <Container>
      <Content>
        <VotingResults />
      </Content>
    </Container>
  );
};

export default ResultsScreen;
