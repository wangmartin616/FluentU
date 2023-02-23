import conversationItem from '@mockups/conversation';
import { TConversation } from '@models';

export const getConversation = (): TConversation => {
  return conversationItem as TConversation;
};
