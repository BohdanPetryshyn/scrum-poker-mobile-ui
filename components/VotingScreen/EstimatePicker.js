import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Picker } from 'native-base';
import { getSessionAvailableEstimates } from './../../store/selectors/session';

const EstimatePicker = ({
  placeholder,
  estimates,
  selectedEstimate,
  setEstimate,
}) => {
  const renderEstimates = () =>
    estimates.map(estimate => (
      <Picker.Item label={estimate} value={estimate} key={estimate} />
    ));

  return (
    <Picker
      mode="dropdown"
      placeholder={placeholder}
      selectedValue={selectedEstimate}
      onValueChange={setEstimate}
    >
      {renderEstimates()}
    </Picker>
  );
};

EstimatePicker.propTypes = {
  placeholder: PropTypes.string.isRequired,
  estimates: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedEstimate: PropTypes.number,
  setEstimate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  estimates: getSessionAvailableEstimates(state),
});

export default connect(mapStateToProps)(EstimatePicker);
