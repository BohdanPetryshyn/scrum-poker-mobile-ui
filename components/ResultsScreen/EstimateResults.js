import React from 'react';
import PropTypes from 'prop-types';
import { Container, Left, List, ListItem, Right, Text } from 'native-base';

const EstimateResults = ({ estimateResults }) => {
  return (
    <Container>
      <List>
        {estimateResults.map(estimateResult => {
          return (
            <ListItem key={estimateResult.id}>
              <Left>
                <Text>{estimateResult.storyName}</Text>
              </Left>
              <Right>
                <Text>{estimateResult.resultCard}</Text>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

EstimateResults.propTypes = {
  estimateResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      storyName: PropTypes.string.isRequired,
      resultCard: PropTypes.string.isRequired,
    }).isRequired
  ),
};
