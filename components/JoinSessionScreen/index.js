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
import { scaleSize } from '../styles/size';
import {
  getUsername,
  getSessionId,
  getIsFormFilled,
} from '../../store/selectors/joinSessionScreen';
import {
  joinSessionFromStore,
  setFieldValue,
} from '../../store/actions/joinSessionScreen';

const JoinSessionScreen = ({
  username,
  sessionId,
  setUsername,
  setSessionId,
  joinSession,
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
            <Label>Session ID</Label>
            <Input value={sessionId} onChangeText={setSessionId} />
          </Item>
          <Button
            style={{ marginTop: scaleSize(30) }}
            block
            disabled={!isFormFilled}
            onPress={joinSession}
          >
            <Text>Join Session</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

JoinSessionScreen.propTypes = {
  username: PropTypes.string.isRequired,
  sessionId: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setSessionId: PropTypes.func.isRequired,
  joinSession: PropTypes.func.isRequired,
  isFormFilled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  username: getUsername(state),
  sessionId: getSessionId(state),
  isFormFilled: getIsFormFilled(state),
});

const mapDispatchToProps = {
  setUsername: username => setFieldValue('username', username),
  setSessionId: sessionId => setFieldValue('sessionId', sessionId),
  joinSession: joinSessionFromStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinSessionScreen);
