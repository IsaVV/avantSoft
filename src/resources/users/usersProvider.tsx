import React, {useState, FC, useCallback} from 'react';
import usersService from './users.service';
import {UserInformation} from './usersModel';
import UsersContext from './usersContext';

interface Props {
  children: React.ReactNode;
}

const initialLoadingObject = {
  fetchingUsers: false,
};

const UserProvider: FC<Props> = ({children}) => {
  const [allUsers, setAllUsers] = useState<UserInformation[]>([]);
  const [loading, setLoading] = useState(initialLoadingObject);

  const fetchAllUsers = useCallback(async () => {
    setAllUsers([]);
    setLoading(prev => ({...prev, fetchingUsers: true}));

    const users = await usersService.getAllUsers();

    setAllUsers(users);
    setLoading(prev => ({...prev, fetchingUsers: false}));
  }, []);

  return (
    <UsersContext.Provider value={{allUsers, fetchAllUsers, loading}}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
