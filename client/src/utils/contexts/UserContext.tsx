import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface CurrentUser {
  userId: string;
  name: string
}

interface UserContextType {
  currentUser: CurrentUser | null,
  setCurrentUser: Dispatch<SetStateAction<CurrentUser | null>>;
}

interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);


  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }} >
      {children}
    </UserContext.Provider>
  )
};
