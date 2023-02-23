import React from 'react';
import { Box, Text } from '../../Common';
import { AnswerCard } from '../AnswerCard';
import { Icons, SpacingRestyleProps, useTheme } from '@theme';

type TAnswerDoneCard = SpacingRestyleProps & {};

export const AnswerDoneCard = ({ ...rest }: TAnswerDoneCard) => {
  const theme = useTheme();

  return (
    <AnswerCard paddingTop="28" paddingBottom="36" {...rest}>
      <Text
        color="successDark"
        fontSize={18}
        fontWeight="700"
        lineHeight={27}
        textAlign="center"
        textTransform="uppercase">
        WELL DONE!
      </Text>
      <Box
        paddingTop="6"
        paddingBottom="8"
        paddingHorizontal="12"
        borderRadius={8}
        marginTop="16"
        style={{ backgroundColor: `${theme.colors.success}1B` }}>
        <Text
          color="successDark"
          fontSize={18}
          fontWeight="500"
          lineHeight={21}
          textAlign="center">
          La estamos haciendo muy bien.
        </Text>
      </Box>
      <Box
        position="absolute"
        left={0}
        right={0}
        flexDirection="row"
        justifyContent="center"
        top={-40}>
        <Box backgroundColor="backgroundPrimary" padding="12" borderRadius={60}>
          <Box
            width={50}
            height={50}
            backgroundColor="success"
            justifyContent="center"
            alignItems="center"
            borderRadius={25}>
            <Icons.CheckIcon />
          </Box>
        </Box>
      </Box>
    </AnswerCard>
  );
};
