import { combineReducers } from 'redux';

import product from './product/reducer';
import offer from './offers/reducer';

const reducers = combineReducers({
  product,
  offer,
});

export default reducers;
