import { useRecoilState } from 'recoil';
import { bottleState } from './state';

export const useModal = () => {
  const [beerModal, setBeerModal] = useRecoilState(bottleState.modal);
  return { beerModal, setBeerModal };
}