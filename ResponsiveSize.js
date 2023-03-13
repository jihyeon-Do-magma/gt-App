import {} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const WINDOW_WIDTH = 360;
const WINDOW_HEIGHT = 760;

export const widthPercentage = width => {
  const percentage = (width / WINDOW_WIDTH) * 100;
  return responsiveScreenWidth(percentage);
};

export const heightPercentage = height => {
  const percentage = (height / WINDOW_HEIGHT) * 100;
  return responsiveScreenHeight(percentage);
};

export const fontPercentage = size => {
  const percentage = size * 0.135;
  return responsiveScreenFontSize(percentage);
};
