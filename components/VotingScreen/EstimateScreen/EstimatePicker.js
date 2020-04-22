import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Picker } from 'native-base';

const EstimatePicker = ({ estimates, selectedEstimate, setEstimate }) => {
  const renderEstimates = () =>
    estimates.map(estimate => (
      <Picker.Item label={estimate} value={estimate} key={estimate} />
    ));

  return (
    <Picker
      mode="dropdown"
      placeholder="Choose your estimate"
      selectedValue={selectedEstimate}
      onValueChange={setEstimate}
    >
      {renderEstimates()}
    </Picker>
  );
};

EstimatePicker.propTypes = {
  estimates: ImmutablePropTypes.listOf(PropTypes.number).isRequired,
  selectedEstimate: PropTypes.number,
  setEstimate: PropTypes.func.isRequired,
};
