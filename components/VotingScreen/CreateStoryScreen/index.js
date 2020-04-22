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
  getStorySummary,
} from '../../../store/selectors/createStoryScreen';
import {
  createStoryFromStore,
  setFieldValue,
} from '../../../store/actions/createStoryScreen';

const CreateStoryScreen = ({
  summary,
  description,
  setSummary,
  setDescription,
  isFormFilled,
  createStory,
}) => {
  return (
    <Container>
      <Content>
        <Form>
          <Item>
            <Label>Story Summary</Label>
            <Input value={summary} onChangeText={setSummary} />
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
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setSummary: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  isFormFilled: PropTypes.bool.isRequired,
  createStory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  summary: getStorySummary(state),
  description: getStoryDescription(state),
  isFormFilled: getIsFormFilled(state),
});

const mapDispatchToProps = {
  setSummary: summary => setFieldValue('summary', summary),
  setDescription: description => setFieldValue('description', description),
  createStory: createStoryFromStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStoryScreen);
