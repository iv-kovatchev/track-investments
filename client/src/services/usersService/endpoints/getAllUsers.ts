import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { User } from '../types';

const useGetAllUsers = () => {
  const { data, isLoading, isError, error, ...args } = useQuery({
    queryKey: ['allUsers'],
    queryFn: () => fetchData<User[]>('users')
  });

  return {
    data,
    isLoading,
    isError,
    error,
    args
  }
};

export default useGetAllUsers;
