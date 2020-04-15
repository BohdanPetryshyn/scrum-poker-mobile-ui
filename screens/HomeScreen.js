import React from 'react';
import {Container, Content, Text, Button} from "native-base";

export default props => {
  return (
    <Container>
      <Content >
        <Text>Home</Text>
        <Button
          full
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate("CreateSession")}>
          <Text>Create Session</Text>
        </Button>
        <Button
          full
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate("JoinSession")}>
          <Text>Join Session</Text>
        </Button>
      </Content>
    </Container>
  )
};
