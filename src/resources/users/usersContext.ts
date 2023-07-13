import {createContext} from 'react';
import {UserInformation} from './usersModel';

export interface UsersContextType {
  allUsers: UserInformation[];
  fetchAllUsers: () => Promise<void>;
  loading: Record<string, boolean>;
}

const UsersContext = createContext<UsersContextType>(null as any);

export default UsersContext;
