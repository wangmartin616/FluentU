import React from 'react';
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import { createBox } from '@shopify/restyle';
import { Theme } from '@theme';

export const SafeAreaBox = createBox<Theme, NativeSafeAreaViewProps>(
  SafeAreaView,
);

export type SafeAreaBoxProps = React.ComponentProps<typeof SafeAreaBox>;
