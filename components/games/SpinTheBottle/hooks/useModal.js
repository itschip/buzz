import { useState } from 'react';

export const useModal = () => {
  const [beerModal, setBeerModal] = useState(false);
  return { beerModal, setBeerModal };
}