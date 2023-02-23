import React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from '@theme';

const PressableBox = createBox<Theme, RNPressableProps>(RNPressable);

export type PressableProps = React.ComponentProps<typeof PressableBox>;

export const Pressable = ({ style, children, ...props }: PressableProps) => {
  return (
    <PressableBox
      hitSlop={16}
      style={args => [
        args.pressed && {
          opacity: 0.7,
        },
        typeof style === 'function' ? style(args) : style,
      ]}
      {...props}>
      {children}
    </PressableBox>
  );
};
