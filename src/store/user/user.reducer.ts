import { GET_ALL_USERS } from './user.actionType';
import { IUserState } from './user.interface';
import { IAction } from 'src/common/interface/action';
import { initialStateUser } from './user.initialState';

/**
 *
 * It is user reducer where user related all action are handle and manage state for user
 * User reducer
 */
export default (
  initialState: IUserState = initialStateUser,
  action: IAction,
): IUserState => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...initialState, users: action.payload };
    default:
      return initialState;
  }
};
