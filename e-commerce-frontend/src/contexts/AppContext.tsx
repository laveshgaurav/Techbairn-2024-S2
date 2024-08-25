// src/context/MyContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { T_User } from '../@types/Types';

// Define the shape of the context data
type MyContextProps = {
  isLoggedIn: boolean | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  userData: T_User | null;
  setUserData: React.Dispatch<React.SetStateAction<T_User | null>>;
};

// Create the context with default undefined values
const AppContext = createContext<MyContextProps | undefined>(undefined);

// Create a provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(
    localStorage.getItem('isLoggedIn')
      ? JSON.parse(localStorage.getItem('isLoggedIn') || 'false')
      : false
  );

  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem('accessToken')
      ? localStorage.getItem('accessToken')
      : ''
  );

  const [userData, setUserData] = useState<T_User | null>(
    localStorage.getItem('userData')
      ? JSON.parse(localStorage.getItem('userData') || '{}')
      : {}
  );

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,

        accessToken,
        setAccessToken,

        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
