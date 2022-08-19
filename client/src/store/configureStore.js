import { applyMiddleware, createStore } from "redux";
import { rootReducer, rootSagas } from "./ducks";

import sagaMiddleware from "./middlewares/sagas";

export default function configureStore() {
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, {}, middlewares);

  sagaMiddleware.run(rootSagas);

  return store;
}
