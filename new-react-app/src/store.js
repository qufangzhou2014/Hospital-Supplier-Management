import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/userSlice';
import vendorReducer from './feature/vendorSlice';
import inventoryReducer from './feature/inventorySlice';

export default configureStore({
  reducer: {
      user: userReducer,
      vendor: vendorReducer,
      inventory: inventoryReducer,  
  },
});