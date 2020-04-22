import React from 'react';
import { Container, Content, Grid, Col, Row } from 'native-base';
import { scaleSize } from '../../styles/size';
import VotingCountDown from './VotingCountDown';

const EstimateScreen = () => {
  return (
    <Container>
      <Content
        contentContainerStyle={{ flex: 1, marginHorizontal: scaleSize(10) }}
      >
        <Grid>
          <Row size={1}>
            <Col size={1}>
              <VotingCountDown />
            </Col>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default EstimateScreen;
