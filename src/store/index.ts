import { createStore } from 'redux';
import rootReducer from './reducer';

/**
 * Redux store root
 */
const store = createStore(rootReducer);

export default store;
