import React from 'react';
import {Button, Container, Content, Text} from "native-base";

export default props => {
  return(
    <Container>
      <Content>
        <Text>Create Session</Text>
        <Button
          full
          style={{marginTop: 10}}
          onPress={() => props.navigation.navigate("Home")}>
          <Text>Home</Text>
        </Button>
      </Content>
    </Container>
  )
};
