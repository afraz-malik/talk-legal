import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import { persistReducer } from 'redux-persist'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root.reduers.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.sagas.js'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [''],
}
const pReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()
const middleWares = [logger, sagaMiddleware]

// export const store = createStore(
//   pReducer,
//   composeWithDevTools(applyMiddleware(...middleWares))
// )
export const store = createStore(pReducer, applyMiddleware(...middleWares))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
