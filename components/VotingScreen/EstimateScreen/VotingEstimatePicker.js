import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { estimateStory } from '../../../store/actions/socket';
import { getUserCard } from '../../../store/selectors/common';
import EstimatePicker from '../EstimatePicker';

const VotingEstimatePicker = ({ selectedEstimate, setEstimate }) => {
  return (
    <EstimatePicker
      placeholder="Choose your estimate"
      selectedEstimate={selectedEstimate}
      setEstimate={setEstimate}
    />
  );
};

VotingEstimatePicker.propTypes = {
  selectedEstimate: PropTypes.number,
  setEstimate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  selectedEstimate: getUserCard(state),
});

const mapDispatchToProps = {
  setEstimate: estimateStory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingEstimatePicker);
