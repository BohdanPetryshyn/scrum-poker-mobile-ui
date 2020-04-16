import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Content, Text } from 'native-base';

const CreateSessionScreen = props => {
  return (
    <Container>
      <Content>
        <Text>Create Session</Text>
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

CreateSessionScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CreateSessionScreen;
