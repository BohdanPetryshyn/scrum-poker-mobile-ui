import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { scaleSize } from '../styles/size';

export default name => ({ size, color }) => {
  const scaledSize = scaleSize(size + 10);
  return <Ionicons name={name} size={scaledSize} color={color} />;
};
