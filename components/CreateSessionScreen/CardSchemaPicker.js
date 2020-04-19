import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Picker } from 'native-base';
import {
  getCardSchemas,
  getCardSchema,
} from '../../store/selectors/createSessionScreen';
import { setFieldValue } from '../../store/actions/createSessionScreen';
import CardSchema from '../../store/models/CardSchema';

const CardSchemaPicker = ({
  selectedCardSchema,
  setCardSchema,
  cardSchemas,
}) => {
  const renderOptions = () =>
    cardSchemas
      .map(cardSchema => (
        <Picker.Item
          label={cardSchema.display}
          value={cardSchema.name}
          key={cardSchema.name}
        />
      ))
      .toArray();

  return (
    <Picker
      mode="dropdown"
      placeholder="Select a card set"
      selectedValue={selectedCardSchema}
      onValueChange={setCardSchema}
    >
      {renderOptions()}
    </Picker>
  );
};

CardSchemaPicker.propTypes = {
  selectedCardSchema: PropTypes.string,
  setCardSchema: PropTypes.func.isRequired,
  cardSchemas: ImmutablePropTypes.listOf(
    ImmutablePropTypes.recordOf(CardSchema)
  ).isRequired,
};

const mapStateToProps = state => ({
  selectedCardSchema: getCardSchema(state),
  cardSchemas: getCardSchemas(state),
});

const mapDispatchToProps = {
  setCardSchema: cardSchema => setFieldValue('cardSchema', cardSchema),
};

export default connect(mapStateToProps, mapDispatchToProps)(CardSchemaPicker);
