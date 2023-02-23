export enum ELanguage {
  en = 'en',
  es = 'es',
}

export type TConversation = {
  id: string;
  footage: number;
  defaultLanguage: ELanguage;
  secondLanguage: ELanguage;
  question: {
    [key in ELanguage]: string;
  };
};

export enum EConversationState {
  ASKING = 'ASKING',
  READY = 'READY',
  ANSWERING = 'ANSWERING',
  DONE = 'DONE',
}
