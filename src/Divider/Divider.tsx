import { View } from 'react-native';
import React from 'react';
import type { DividerProps } from './Divider.types';

export const Divider = ({
  color = 'hsl(218, 39%, 20%)',
  width = '100%',
  height = 1,
  margin = 14,
}: DividerProps) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        marginVertical: margin,
      }}
    />
  );
};
