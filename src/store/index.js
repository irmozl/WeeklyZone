import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import projectApi from './apis/projectApi'
import authApi from './apis/authApi'
import commentApi from './apis/commentApi'
import dutyApi from './apis/dutyApi'
import labelApi from './apis/labelApi'
import teamApi from './apis/teamApi'
import userApi from './apis/userApi'

const rootReducer = combineReducers({
  // api eklemesi
  [projectApi.reducerPath]: projectApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [commentApi.reducerPath]:commentApi.reducer,
  [dutyApi.reducerPath]:dutyApi.reducer,
  [labelApi.reducerPath]:labelApi.reducer,
  [teamApi.reducerPath]:teamApi.reducer,
  [userApi.reducerPath]:userApi.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    // api eklemesi
    projectApi.reducerPath,
    authApi.reducerPath,
    commentApi.reducerPath,
    dutyApi.reducerPath,
    labelApi.reducerPath,
    teamApi.reducerPath,
    userApi.reducerPath
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    // api eklemesi
      .concat(projectApi.middleware, authApi.middleware,commentApi.middleware,dutyApi.middleware,labelApi.middleware,teamApi.middleware,userApi.middleware)
})

const persistor = persistStore(store)

export { persistor, store }

setupListeners(store.dispatch)