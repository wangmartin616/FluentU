import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@shopify/restyle';
import { ConversationScreen } from '@screens';
import { theme } from '@theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ConversationScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
