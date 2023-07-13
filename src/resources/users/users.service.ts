import axios from 'axios';
import {UserInformation} from './usersModel';

class UserService {
  getAllUsers = async (): Promise<UserInformation[]> => {
    const usersAll = await axios.get(
      'https://run.mocky.io/v3/ce47ee53-6531-4821-a6f6-71a188eaaee0',
    );
    return usersAll.data.users;
  };
}

export default new UserService();
