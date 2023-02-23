import React from 'react';
import { Box, Pressable, Text } from '../../Common';
import { AnswerCard } from '../AnswerCard';
import { Icons, SpacingRestyleProps } from '@theme';

type TAnswerReadyCard = SpacingRestyleProps & {
  onRecord: () => void;
};

export const AnswerReadyCard = ({ onRecord, ...rest }: TAnswerReadyCard) => {
  return (
    <AnswerCard {...rest}>
      <Box flexDirection="row" alignItems="center">
        <Icons.SpeakerIcon />
        <Text
          color="textPrimary"
          fontSize={18}
          fontWeight="500"
          lineHeight={21}
          marginLeft="12">
          La estamos haciendo muy bien.
        </Text>
      </Box>
      <Text
        color="textSecondary"
        fontSize={14}
        lineHeight={16}
        textAlign="center"
        marginTop="8">
        We are doing very well
      </Text>
      <Box
        position="absolute"
        bottom={-30}
        left={0}
        right={0}
        flexDirection="row"
        justifyContent="center"
        alignItems="center">
        <Pressable
          width={60}
          height={60}
          justifyContent="center"
          alignItems="center"
          backgroundColor="primary"
          borderRadius={20}
          onPress={onRecord}>
          <Icons.MicrophoneIcon />
        </Pressable>
      </Box>
    </AnswerCard>
  );
};
