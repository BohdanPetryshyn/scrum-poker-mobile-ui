import React from 'react';
import { Container, Content, Grid, H2, Row } from 'native-base';

const WaitingScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        <Grid>
          <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
            <H2 style={{ textAlign: 'center' }}>
              Host creating a story.
              {'\n'}
              Please wait...
            </H2>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default WaitingScreen;
