import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import {
  createRestyleComponent,
  createBox,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import { Text } from '../Text';
import { Theme } from '@theme';

const buttonColorScheme = createVariant({
  themeKey: 'buttonColorSchemes',
  property: 'colorScheme',
});

const PressableBox = createBox<Theme, PressableProps>(Pressable);
const ButtonBase = createRestyleComponent<
  React.ComponentProps<typeof PressableBox> &
    VariantProps<Theme, 'buttonColorSchemes', 'colorScheme'>,
  Theme
>([buttonColorScheme], PressableBox);

const buttonTextColorSchemes = createVariant({
  themeKey: 'buttonTextColorSchemes',
  property: 'colorScheme',
});

const ButtonText = createRestyleComponent<
  React.ComponentProps<typeof Text> &
    VariantProps<Theme, 'buttonTextColorSchemes', 'colorScheme'>,
  Theme
>([buttonTextColorSchemes], Text);

export type ButtonProps = React.ComponentProps<typeof ButtonBase> & {
  children?: React.ReactNode | string;
};

export const Button = ({
  colorScheme,
  children,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonBase
      colorScheme={colorScheme}
      disabled={disabled}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      style={args => [
        args.pressed && {
          opacity: 0.7,
        },
      ]}
      {...rest}>
      <ButtonText colorScheme={colorScheme}>{children}</ButtonText>
    </ButtonBase>
  );
};
