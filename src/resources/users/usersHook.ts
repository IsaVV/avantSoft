import {useContext} from 'react';
import UsersContext, {UsersContextType} from './usersContext';

export default function useUsers(): UsersContextType {
  return useContext(UsersContext);
}
