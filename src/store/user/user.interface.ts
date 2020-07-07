/**
 * User interface
 */
export interface IUser {
  username: string;
  _id: string;
}

/**
 * User global state
 */
export interface IUserState {
  users: IUser[];
}
