import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
  Store
} from 'redux';
import middleware from './middleware';
import reducer from './rootReducer';
import { IStore } from './state';

declare const module: Module;
type StoreCreator = (
  reducer: Reducer<IStore>,
  preloadedState: IStore | undefined
) => Store<IStore | {}>;

export default (initialState?: IStore): Store<IStore> => {
  let finalCreateStore: any;

  if (__DEVTOOLS__ && __CLIENT__) {
    // TODO: fix types
    finalCreateStore = compose(
      applyMiddleware(...(middleware as Middleware[])),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f
    )(createStore) as StoreCreator;
  } else {
    finalCreateStore = applyMiddleware(...(middleware as Middleware[]))(
      createStore
    );
  }

  const store = finalCreateStore(reducer, initialState);

  if (!__PROD__ && module.hot) {
    module.hot.accept('./rootReducer.ts', () => store.replaceReducer(reducer));
  }

  return store;
};
