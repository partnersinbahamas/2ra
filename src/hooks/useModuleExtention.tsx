import { useEffect, useState } from 'react';

function useModuleExtention(extention: TStylesExtension) {
  const [moduleExtentionState, setModuleExtentionState] = useState<boolean>(false);

  useEffect(() => {
    setModuleExtentionState(extention === '.module.scss');
    return () => setModuleExtentionState(false);
  });

  return { moduleExtentionState, setModuleExtentionState };
}

export default useModuleExtention;
