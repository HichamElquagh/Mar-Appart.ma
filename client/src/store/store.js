import { configureStore } from '@reduxjs/toolkit'
import authApi from './api/authQuery'

const store = configureStore({
     reducer: {
        [authApi.reducerPath] : authApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(authApi.middleware),

 })

export default store

// The store now has redux-thunk added and the Redux DevTools Extension is turned on