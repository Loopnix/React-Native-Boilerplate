/**
 * Register root reducer state here
 */
import { IUserState } from 'src/store/user/user.interface';

export interface IRootReducerState {
  /**
   * User Reducer state
   */
  userReducer: IUserState;
}
