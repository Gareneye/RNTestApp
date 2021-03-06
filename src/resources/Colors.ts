/**
 * Do not use Colors directly. Use colors from the exported object.
 *
 * For naming colors use: http://chir.ag/projects/name-that-color/
 */
const Palette = {
  havelockBlue: '#3c8cd5',
  mineShaft: '#3b3b3b',
  grey: 'grey',
  matterhorn: '#4c3b3b',
  cornflower: '#9ec6ea',
  matisse: '#256cad',

  white: '#ffffff',
  black: '#000000',
  red: '#FF001D',
  electricViolet: '#530BF4',
  wildBlueYonder: '#6F6FB7',
  paua: '#1F0063',
  periwinkleGray: '#D5DAD5',
  lightGrey: 'rgb(240, 240, 240)',
};

export const Colors = {
  primary: Palette.electricViolet,
  caption: Palette.black,
  desc: Palette.grey,
  label: Palette.wildBlueYonder,
  text: Palette.paua,
  border: Palette.periwinkleGray,
  separator: Palette.lightGrey,
  error: Palette.red,
  progress: Palette.electricViolet,
};
