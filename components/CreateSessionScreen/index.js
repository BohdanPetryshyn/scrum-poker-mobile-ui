import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
} from 'native-base';
import {
  getIsFormFilled,
  getTopic,
  getUsername,
} from '../../store/selectors/createSessionScreen';
import {
  createSessionFromStore,
  setFieldValue,
} from '../../store/actions/createSessionScreen';
import CardSchemaPicker from './CardSchemaPicker';
import { scaleSize } from '../styles/size';

const CreateSessionScreen = ({
  username,
  topic,
  setUsername,
  setTopic,
  createSession,
  isFormFilled,
}) => {
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
          <Button
            style={{ marginTop: scaleSize(30) }}
            block
            disabled={!isFormFilled}
            onPress={createSession}
          >
            <Text>Create Session</Text>
          </Button>
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
  createSession: PropTypes.func.isRequired,
  isFormFilled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  username: getUsername(state),
  topic: getTopic(state),
  isFormFilled: getIsFormFilled(state),
});

const mapDispatchToProps = {
  setUsername: username => setFieldValue('username', username),
  setTopic: topic => setFieldValue('topic', topic),
  createSession: createSessionFromStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSessionScreen);
