import { createContext } from 'react';
import { User } from '../../services/usersService/types';

interface UsersContextType {
  users?: User[]
  isLoading: boolean;
  isError: boolean
}

export const UsersContext = createContext<UsersContextType>({ isLoading: false, isError: false });