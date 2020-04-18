import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Content, Text } from 'native-base';

const JoinSessionScreen = props => {
  return (
    <Container>
      <Content>
        <Text>Join Session</Text>
        <Button
          full
          style={{ marginTop: 10 }}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Text>Home</Text>
        </Button>
      </Content>
    </Container>
  );
};

JoinSessionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default JoinSessionScreen;
