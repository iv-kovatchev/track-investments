import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../index';
import { User } from '../types';

const useGetAllUsers = () => {
  const { data, isLoading, isError, ...args } = useQuery<User[], Error>({
    queryKey: ['allUsers'],
    queryFn: () => fetchData('users')
  });

  return {
    data,
    isLoading,
    isError,
    args
  }
};

export default useGetAllUsers;
