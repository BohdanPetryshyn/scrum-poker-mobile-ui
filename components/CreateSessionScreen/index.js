import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import { getFieldValue } from '../../store/selectors/createSessionScreen';
import { setFieldValue } from '../../store/actions/createSessionScreen';
import CardSchemaPicker from './CardSchemaPicker';

const CreateSessionScreen = ({ username, topic, setUsername, setTopic }) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Label>Username</Label>
            <Input value={username} onChangeText={setUsername} />
          </Item>
          <Item>
            <Label>Session Topic</Label>
            <Input value={topic} onChangeText={setTopic} />
          </Item>
          <Item>
            <Label>Card Set</Label>
            <CardSchemaPicker />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

CreateSessionScreen.propTypes = {
  username: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setTopic: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const getUsername = getFieldValue('username');
  const getTopic = getFieldValue('topic');

  return {
    username: getUsername(state),
    topic: getTopic(state),
  };
};

const mapDispatchToProps = {
  setUsername: username => setFieldValue('username', username),
  setTopic: topic => setFieldValue('topic', topic),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSessionScreen);
