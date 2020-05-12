import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button } from 'native-base';

const HomeScreen = props => {
  return (
    <Container>
      <Content>
        <Text>Home</Text>
        <Button
          full
          style={{ marginTop: 10 }}
          onPress={() => props.navigation.navigate('CreateSession')}
        >
          <Text>Create Session</Text>
        </Button>
        <Button
          full
          style={{ marginTop: 10 }}
          onPress={() => props.navigation.navigate('JoinSession')}
        >
          <Text>Join Session</Text>
        </Button>
        <Button
          full
          style={{ marginTop: 10 }}
          onPress={() => props.navigation.navigate('PastSessions')}
        >
          <Text>Past Sessions</Text>
        </Button>
      </Content>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
