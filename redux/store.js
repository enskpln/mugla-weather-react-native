/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import sliderReducer from './reducers/sliderReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  sliderReducer: persistReducer(persistConfig, sliderReducer),
});

export const store = configureStore({
  reducer: {
    reducers: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
