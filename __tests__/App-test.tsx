/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-progress', () => 'Bar');
jest.mock('react-native-video', () => 'Video');
jest.mock('@assets/videos/video.mov', () => {});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
