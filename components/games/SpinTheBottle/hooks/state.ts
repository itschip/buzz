import { atom } from 'recoil';

export const bottleState = {
  modal: atom({
    key: 'bottleModal',
    default: false
  })
}