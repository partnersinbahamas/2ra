import { useEffect, useState } from 'react';
import { TStile } from '../components/utils/types/types';

function usePrime(stile: TStile) {
  const [primeState, setPrimeState] = useState<boolean>(false);

  useEffect(() => {
    setPrimeState(stile === 'primary');
    return () => setPrimeState(false);
  });

  return { primeState, setPrimeState };
}

export default usePrime;
