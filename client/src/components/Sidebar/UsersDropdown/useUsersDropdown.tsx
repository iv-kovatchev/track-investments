import { getAllUsers } from '../../../services/usersService';
import { useContext, useState } from 'react';
import { SelectOption } from '../../shared/Select/types';
import { UserContext } from '../../../utils/contexts/UserContext';

const useUsersDropdown = () => {
  const { data, isLoading, isError, error  } = getAllUsers();

  const { setCurrentUser } = useContext(UserContext);

  const [selectedUser, setSelectUser] = useState<string | null>(null);

  const userOptions: SelectOption[] = data?.map((
    { first_name, last_name, id }) =>
    ({ label: `${first_name} ${last_name}`, value: `${id}` })) ?? [];

  if(isError) {
    alert('Error!');
  }

  const handleSelectedUser = (option: SelectOption) => {
    setSelectUser(option.label);
    setCurrentUser({
      userId: option.value,
      name: option.label
    })
  }

  return {
    isLoading,
    userOptions,
    selectedUser,
    handleSelectedUser
  }
}

export default useUsersDropdown;
