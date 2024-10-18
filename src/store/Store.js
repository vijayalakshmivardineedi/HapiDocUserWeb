import { configureStore } from '@reduxjs/toolkit';

import loginReducer from "../slice/User/LoginSlice"

const reducer = {
  login:loginReducer,
};

export default configureStore({
  reducer,

});
