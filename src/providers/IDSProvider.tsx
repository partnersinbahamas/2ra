import React, { useMemo, useState } from 'react';

const IDSContext = React.createContext({
  stylesExtention: '.scss',
});

export const useIDS = () => React.useContext(IDSContext);

type TProps = {
  children: React.ReactNode;
  extension: TStylesExtension;
};

export const IDSProvider: React.FC<TProps> = ({
  children,
  extension = '.scss',
}) => {
  const [stylesExtention] = useState<TStylesExtension>(extension);
  const providerValues = useMemo(
    () => ({ stylesExtention }),
    [stylesExtention],
  );

  return (
    <IDSContext.Provider value={providerValues}>{children}</IDSContext.Provider>
  );
};
