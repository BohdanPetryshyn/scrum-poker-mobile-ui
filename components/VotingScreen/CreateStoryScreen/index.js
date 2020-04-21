import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';
import { scaleSize } from '../../styles/size';
import {
  getIsFormFilled,
  getStoryDescription,
  getStoryName,
} from '../../../store/selectors/createStoryScreen';
import {
  createStoryFromStore,
  setFieldValue,
} from '../../../store/actions/createStoryScreen';

const CreateStoryScreen = ({
  name,
  description,
  setName,
  setDescription,
  isFormFilled,
  createStory,
}) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Label>Story Name</Label>
            <Input value={name} onChangeText={setName} />
          </Item>
          <Item>
            <Label>Story Description</Label>
            <Input value={description} onChangeText={setDescription} />
          </Item>
          <Button
            style={{ marginTop: scaleSize(30) }}
            block
            disabled={!isFormFilled}
            onPress={createStory}
          >
            <Text>Create Story</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

CreateStoryScreen.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  isFormFilled: PropTypes.bool.isRequired,
  createStory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: getStoryName(state),
  description: getStoryDescription(state),
  isFormFilled: getIsFormFilled(state),
});

const mapDispatchToProps = {
  setName: name => setFieldValue('name', name),
  setDescription: description => setFieldValue('description', description),
  createStory: createStoryFromStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStoryScreen);
