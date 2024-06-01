import React, { useMemo, useState } from 'react';

const HDContext = React.createContext({
  stylesExtention: '.scss',
});

export const useHD = () => React.useContext(HDContext);

type TProps = {
  children: React.ReactNode;
  extension: TStylesExtension;
};

export const HDProvider: React.FC<TProps> = ({
  children,
  extension = '.scss',
}) => {
  const [stylesExtention] = useState<TStylesExtension>(extension);
  const providerValues = useMemo(
    () => ({ stylesExtention }),
    [stylesExtention],
  );

  return (
    <HDContext.Provider value={providerValues}>{children}</HDContext.Provider>
  );
};
