import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Item, Label, Text, Form } from 'native-base';

import EstimatePicker from '../EstimatePicker';
import { getSelectedEstimate } from '../../../store/selectors/resultScreen';
import {
  setFieldValue,
  submitResultEstimateFromStore,
} from '../../../store/actions/resultScreen';
import { scaleSize } from '../../styles/size';

const ResultEstimatePicker = ({
  selectedEstimate,
  setEstimate,
  submitResultEstimate,
}) => {
  return (
    <Form style={{ width: '100%' }}>
      <Item>
        <Label>Result Estimate</Label>
        <EstimatePicker
          placeholder="Choose the final estimate"
          selectedEstimate={selectedEstimate}
          setEstimate={setEstimate}
        />
      </Item>
      <Button
        style={{ marginTop: scaleSize(30) }}
        block
        disabled={!selectedEstimate}
        onPress={submitResultEstimate}
      >
        <Text>Set Result Estimate</Text>
      </Button>
    </Form>
  );
};

ResultEstimatePicker.propTypes = {
  selectedEstimate: PropTypes.number,
  setEstimate: PropTypes.func.isRequired,
  submitResultEstimate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedEstimate: getSelectedEstimate(state),
});

const mapDispatchToProps = {
  setEstimate: estimate => setFieldValue('selectedEstimate', estimate),
  submitResultEstimate: submitResultEstimateFromStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultEstimatePicker);
