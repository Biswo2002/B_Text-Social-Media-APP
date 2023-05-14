import React, {createContext, ReactNode, useContext} from 'react';

const AppContext = createContext<any>({});

type AppContextProviderProps = {
  children?: ReactNode;
};

export default ({children}: AppContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<unknown>(null);
  const [firstTime, setFirstTime] = React.useState(null);
  const [role, setRole] = React.useState<'admin' | 'role'>();

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        role,
        setRole,
        firstTime,
        setFirstTime,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
