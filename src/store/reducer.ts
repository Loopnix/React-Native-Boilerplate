/**
 * It is root for store reducer
 */
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import { IRootReducerState } from 'src/common/interface/reducer';

/**
 * Return all Reducer
 */
export default combineReducers<IRootReducerState>({
  userReducer,
});
