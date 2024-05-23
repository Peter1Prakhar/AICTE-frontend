// atoms.js
import { atom } from 'recoil';

export const formsFilledState = atom({
  key: 'formsFilledState',
  default: 0, // Initial number of forms filled
});
