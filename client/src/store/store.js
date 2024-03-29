import { configureStore } from '@reduxjs/toolkit'
import authApi from './api/authQuery'
import apartmentApi from './api/apartmentQuery'
import userApi from './api/userQuery'
import authReducer from './slices/userSlice'
import reservationApi from './api/reservationQuery'



const store = configureStore({
     reducer: {
        auth : authReducer,
        [authApi.reducerPath] : authApi.reducer,
        [apartmentApi.reducerPath]: apartmentApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
         [reservationApi.reducerPath]: reservationApi.reducer,

     },
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(authApi.middleware,apartmentApi.middleware,userApi.middleware,reservationApi.middleware),
     
      
    
 })

export default store

// The store now has redux-thunk added and the Redux DevTools Extension is turned on