import { StyleSheet } from 'react-native';
import { Dimens } from './Dimens';

const FontFamily = {
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
  semibold: 'Lato-Semibold',
};

export const Fonts = StyleSheet.create({
  // Headers
  heading1: {
    fontFamily: FontFamily.regular,
    fontSize: Dimens.fontSize.xk,
  },
  heading2: {
    fontFamily: FontFamily.bold,
    fontSize: Dimens.fontSize.xxl,
  },
  heading3: {
    fontFamily: FontFamily.bold,
    fontSize: Dimens.fontSize.xl,
  },

  // Body fonts
  body17: {
    fontFamily: FontFamily.regular,
    fontSize: Dimens.fontSize.l,
    lineHeight: 22,
  },
  body15: {
    fontFamily: FontFamily.regular,
    fontSize: Dimens.fontSize.m,
    lineHeight: 20,
  },

  // Labels and captions (bolder than body)
  label15: {
    fontFamily: FontFamily.semibold,
    fontSize: Dimens.fontSize.m,
    lineHeight: 20,
  },
  caption13: {
    fontFamily: FontFamily.semibold,
    fontSize: Dimens.fontSize.s,
    lineHeight: 18,
  },
  caption11: {
    fontFamily: FontFamily.semibold,
    fontSize: Dimens.fontSize.xs,
    lineHeight: 13,
  },
});
