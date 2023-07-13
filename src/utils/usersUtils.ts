import {UserInformation} from '../resources/users/usersModel';

export const splitUsersIntoGroups = (
  users: UserInformation[],
  groupSize: number,
) => {
  const groups = [];
  const totalGroups = Math.ceil(users.length / groupSize);
  for (let i = 0; i < totalGroups; i++) {
    groups.push(users.slice(i * groupSize, (i + 1) * groupSize));
  }
  return groups;
};
