import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Form, Item, Label, Input } from 'native-base';

const CreateSessionScreen = props => {
  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateSessionScreen;
