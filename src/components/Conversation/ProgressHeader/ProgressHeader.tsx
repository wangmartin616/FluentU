import React from 'react';
import { Bar } from 'react-native-progress';
import { Box, Pressable } from '../../Common';
import { Icons, SpacingRestyleProps, useTheme } from '@theme';

type TProgressHeader = SpacingRestyleProps & {
  onClose: () => void;
};

export const ProgressHeader = ({ onClose, ...rest }: TProgressHeader) => {
  const theme = useTheme();

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      marginHorizontal="20"
      {...rest}>
      <Pressable onPress={onClose}>
        <Icons.CloseIcon />
      </Pressable>
      <Box flex={1} marginHorizontal="24">
        <Bar
          progress={0.3}
          width={null}
          borderWidth={0}
          color={theme.colors.primary}
          unfilledColor={theme.colors.progressBackground}
        />
      </Box>
      <Pressable>
        <Icons.MenuIcon />
      </Pressable>
    </Box>
  );
};
