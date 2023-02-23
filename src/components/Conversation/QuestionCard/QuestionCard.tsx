import React from 'react';
import { Box, Text } from '../../Common';
import { SpacingRestyleProps } from '@theme';

type TQuestionCard = SpacingRestyleProps & {
  defaultLanguageQuestion?: string;
  secondLanguageQuestion?: string;
};

export const QuestionCard = ({
  defaultLanguageQuestion,
  secondLanguageQuestion,
  ...rest
}: TQuestionCard) => {
  return (
    <Box marginHorizontal="20" {...rest}>
      <Box padding="20" backgroundColor="black" borderRadius={12}>
        <Text
          color="white"
          fontSize={18}
          fontWeight="500"
          lineHeight={21}
          textAlign="center">
          {defaultLanguageQuestion}
        </Text>
        <Text
          color="whiteDark"
          fontSize={13}
          lineHeight={16}
          textAlign="center">
          {secondLanguageQuestion}
        </Text>
      </Box>
    </Box>
  );
};
