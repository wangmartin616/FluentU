import React from 'react';
import Video from 'react-native-video';
import { SafeAreaBox, Box } from '../../Common';
import { styles } from './styles';

type TVideoBackground = {
  footage: number;
  children?: React.ReactNode | React.ReactNode[] | null;
};

export const VideoBackground = ({ footage, children }: TVideoBackground) => {
  return (
    <SafeAreaBox flex={1} edges={['top']} position="relative">
      <Video
        source={footage}
        style={styles.videoBackground}
        resizeMode="cover"
        repeat
      />
      <Box zIndex={11} flex={1}>
        {children}
      </Box>
    </SafeAreaBox>
  );
};
