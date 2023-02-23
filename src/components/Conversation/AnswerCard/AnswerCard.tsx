import React from 'react';
import { Box, Pressable } from '../../Common';
import { Icons, SpacingRestyleProps } from '@theme';

type TAnswerCard = SpacingRestyleProps & {
  children?: React.ReactNode | React.ReactNode[];
};

export const AnswerCard = ({ children, ...rest }: TAnswerCard) => {
  return (
    <Box
      backgroundColor="backgroundPrimary"
      borderRadius={16}
      paddingHorizontal="20"
      paddingTop="36"
      paddingBottom="44"
      marginHorizontal="20"
      shadowColor="black"
      shadowOpacity={0.1}
      shadowOffset={{ width: 8, height: 8 }}
      shadowRadius={8}
      elevation={8}
      position="relative"
      {...rest}>
      {children}
      <Pressable position="absolute" right={12} top={12}>
        <Icons.BookmarkIcon />
      </Pressable>
    </Box>
  );
};
