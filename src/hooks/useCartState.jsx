import { useState } from 'react';

export const useCartState = () => {
  const [resetTrigger, setResetTrigger] = useState(0);

  const triggerReset = () => {
    setResetTrigger(prev => prev + 1);
  };

  return [ resetTrigger, triggerReset ];
};