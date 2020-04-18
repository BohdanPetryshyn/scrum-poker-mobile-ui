import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Picker } from 'native-base';
import {
  getCardSchemas,
  getFieldValue,
} from '../../store/selectors/createSessionScreen';
import { setFieldValue } from '../../store/actions/createSessionScreen';

const CardSchemaPicker = ({
  selectedCardSchema,
  setCardSchema,
  cardSchemas,
}) => {
  return (
    <Picker selectedValue={selectedCardSchema} onValueChange={setCardSchema}>
      {cardSchemas.map(cardSchema => (
        <Picker.Item label={cardSchema.display} value={cardSchema.name} />
      ))}
    </Picker>
  );
};

CardSchemaPicker.propTypes = {
  selectedCardSchema: PropTypes.string,
  setCardSchema: PropTypes.func.isRequired,
  cardSchemas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = state => {
  const getCardSchema = getFieldValue('cardSchema');

  return {
    selectedCardSchema: getCardSchema(state),
    cardSchemas: getCardSchemas(state),
  };
};

const mapDispatchToProps = {
  setCardSchema: cardSchema => setFieldValue('cardSchema', cardSchema),
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSchemaPicker);
