import { GET_ALL_USERS } from './user.actionType';
import { IUser } from './user.interface';

/**
 * Get all users action
 */
export const getAllUsers = (users: IUser[]) => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};
