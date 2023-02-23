import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Box,
  Button,
  AnswerReadyCard,
  AnswerSpeakingCard,
  AnswerDoneCard,
  ProgressHeader,
  QuestionCard,
  VideoBackground,
} from '@components';
import { Images, useTheme } from '@theme';
import { TConversation, EConversationState } from '@models';
import * as conversationServices from '@services/conversation';
import { styles } from './styles';

const ConversationScreen = () => {
  const theme = useTheme();

  const [conversation, setConversation] = useState<TConversation | null>(null);
  const [conversationState, setConversationState] =
    useState<EConversationState | null>(null);
  const [progressHeaderVisible, setProgressHeaderVisible] =
    useState<boolean>(true);

  useEffect(() => {
    fetchConversation();
  }, []);

  useEffect(() => {
    if (conversation) {
      setConversationState(EConversationState.ASKING);
    }
  }, [conversation]);

  useEffect(() => {
    if (conversationState === EConversationState.ASKING) {
      setTimeout(() => setConversationState(EConversationState.READY), 3000);
    } else if (conversationState === EConversationState.ANSWERING) {
      setTimeout(() => setConversationState(EConversationState.DONE), 3000);
    }
  }, [conversationState]);

  const fetchConversation = async () => {
    try {
      const conversationData = await conversationServices.getConversation();
      setConversation(conversationData);
    } catch (e) {
      console.log(e);
    }
  };

  const closeProgressHeader = () => {
    setProgressHeaderVisible(false);
  };

  const startAnswering = () => {
    setConversationState(EConversationState.ANSWERING);
  };

  const renderAsking = () => {
    return (
      <Box flex={1}>
        <QuestionCard
          defaultLanguageQuestion={
            conversation?.question[conversation.defaultLanguage]
          }
          secondLanguageQuestion={
            conversation?.question[conversation.secondLanguage]
          }
          marginTop="16"
        />
      </Box>
    );
  };

  const renderReady = () => {
    return (
      <Box flex={1} justifyContent="flex-end">
        <AnswerReadyCard onRecord={startAnswering} marginBottom="120" />
      </Box>
    );
  };

  const renderAnswering = () => {
    const gradientColor = theme.colors.primary;

    return (
      <Box flex={1} justifyContent="flex-end">
        <LinearGradient
          style={styles.gradientWrapper}
          colors={[
            'transparent',
            `${gradientColor}44`,
            `${gradientColor}88`,
            `${gradientColor}AA`,
            `${gradientColor}EE`,
            gradientColor,
            gradientColor,
          ]}>
          <AnswerSpeakingCard marginBottom="32" />
          <Box flexDirection="row" justifyContent="center" marginBottom="48">
            <Images.Equalizer />
          </Box>
        </LinearGradient>
      </Box>
    );
  };

  const renderDone = () => {
    const gradientColor = theme.colors.successDark;

    return (
      <Box flex={1} justifyContent="flex-end">
        <LinearGradient
          style={styles.gradientWrapper}
          colors={[
            'transparent',
            `${gradientColor}44`,
            `${gradientColor}88`,
            `${gradientColor}AA`,
            `${gradientColor}EE`,
            gradientColor,
            gradientColor,
          ]}>
          <AnswerDoneCard marginBottom="20" />
          <Button colorScheme="success" marginBottom="48" marginHorizontal="20">
            CONTINUE
          </Button>
        </LinearGradient>
      </Box>
    );
  };

  if (!conversation) {
    return null;
  }

  return (
    <VideoBackground footage={conversation.footage}>
      {progressHeaderVisible && (
        <ProgressHeader onClose={closeProgressHeader} marginTop="16" />
      )}
      {!conversationState
        ? null
        : conversationState === EConversationState.ASKING
        ? renderAsking()
        : conversationState === EConversationState.READY
        ? renderReady()
        : conversationState === EConversationState.ANSWERING
        ? renderAnswering()
        : renderDone()}
    </VideoBackground>
  );
};

export { ConversationScreen };
