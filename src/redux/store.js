import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root.reduers.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.sagas.js'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createLogger } from "redux-logger";
import thunk from 'redux-thunk'

// import { persistStore } from "redux-persist";
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [''],
// }
// const pReducer = persistReducer(persistConfig, rootReducer)
// const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const middleWares = [sagaMiddleware, thunk]
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
)

// export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga)

// export const persistor = persistStore(store);
