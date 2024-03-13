import { configureStore } from '@reduxjs/toolkit'
import authApi from './api/authQuery'
import apartmentApi from './api/apartmentQuery'

const store = configureStore({
     reducer: {
        [authApi.reducerPath] : authApi.reducer,
        [apartmentApi.reducerPath]: apartmentApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(authApi.middleware),
     

 })

export default store

// The store now has redux-thunk added and the Redux DevTools Extension is turned on