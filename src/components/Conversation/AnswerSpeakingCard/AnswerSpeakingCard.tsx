import React from 'react';
import { Text } from '../../Common';
import { AnswerCard } from '../AnswerCard';
import { SpacingRestyleProps } from '@theme';

type TAnswerSpeakingCard = SpacingRestyleProps & {};

export const AnswerSpeakingCard = ({ ...rest }: TAnswerSpeakingCard) => {
  return (
    <AnswerCard paddingTop="16" {...rest}>
      <Text
        color="textSecondary"
        fontSize={13}
        lineHeight={20}
        textAlign="center">
        Speak now...
      </Text>
      <Text
        color="textSecondary"
        fontSize={18}
        fontWeight="500"
        lineHeight={21}
        textAlign="center"
        marginTop="24">
        <Text color="primaryDark">La estamos</Text> haciendo muy bien.
      </Text>
    </AnswerCard>
  );
};
