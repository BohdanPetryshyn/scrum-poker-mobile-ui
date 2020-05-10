import React from 'react';
import { Container, Content, Grid, Col, Row, Item, Label } from 'native-base';
import { scaleSize } from '../../styles/size';
import VotingCountDown from './VotingCountDown';
import EstimatePicker from './VotingEstimatePicker';
import Estimates from '../Estimates';
import StoryHeader from '../../StoryHeader';

const EstimateScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, margin: scaleSize(10) }}>
        <Grid>
          <Row size={1}>
            <Col size={1}>
              <VotingCountDown />
            </Col>
            <StoryHeader />
          </Row>
          <Row size={7}>
            <Estimates />
          </Row>
          <Row
            size={1}
            style={{
              alignItems: 'flex-start',
            }}
          >
            <Item style={{ width: '100%' }}>
              <Label>Your Estimate</Label>
              <EstimatePicker />
            </Item>
          </Row>
        </Grid>
      </Content>
    </Container>
  );
};

export default EstimateScreen;
