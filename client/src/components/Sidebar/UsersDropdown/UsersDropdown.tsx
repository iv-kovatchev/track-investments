import Select from '../../shared/Select';
import useUsersDropdown from './useUsersDropdown';

const UsersDropdown = () => {
  const { isLoading, userOptions, selectedUser, handleSelectedUser } = useUsersDropdown();

  return (
    <div className='sidebar__users-dropdown'>
      {isLoading ?
        <div>Loading</div> :

        <Select
          onChange={handleSelectedUser}
          selectedValue={selectedUser}
          placeholder={'Select user...'}
          options={userOptions}/>}
    </div>
  )
}

export default UsersDropdown;
