import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Picker } from 'native-base';
import { getSessionAvailableEstimates } from '../../../store/selectors/session';
import { getEstimate } from '../../../store/selectors/estimatingScreen';
import { estimateStoryFromStore } from '../../../store/actions/estimateScreen';

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
  estimates: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedEstimate: PropTypes.number,
  setEstimate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  estimates: getSessionAvailableEstimates(state),
  selectedEstimate: getEstimate(state),
});

const mapDispatchToProps = {
  setEstimate: estimateStoryFromStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(EstimatePicker);
