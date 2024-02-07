import Select from '../../shared/Select';
import useUsersDropdown from './useUsersDropdown';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const UsersDropdown = () => {
  const { isLoading, userOptions, selectedUser, handleSelectedUser } = useUsersDropdown();

  return (
    <div className='sidebar__users-dropdown'>
      {isLoading ?
        <Skeleton height={38} /> :
        <Select
          onChange={handleSelectedUser}
          selectedValue={selectedUser}
          placeholder={'Select user...'}
          options={userOptions}/>}
    </div>
  )
}

export default UsersDropdown;
