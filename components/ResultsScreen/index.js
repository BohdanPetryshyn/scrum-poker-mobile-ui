import React from 'react';
import { Container, Content, Grid, Row } from 'native-base';
import { scaleSize } from '../styles/size';
import StoryHeader from '../StoryHeader';
import VotingResults from './VotingResults';

const ResultsScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, margin: scaleSize(10) }}>
        <Grid>
          <Row size={1}>
            <StoryHeader />
          </Row>
          <Row size={8}>
            <VotingResults />
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default ResultsScreen;
