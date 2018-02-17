import { combineReducers } from 'redux';
import { IStore } from './state';

const reducer = combineReducers<IStore>({
  entities: combineReducers({}),
  ui: combineReducers({})
});

export default reducer;
