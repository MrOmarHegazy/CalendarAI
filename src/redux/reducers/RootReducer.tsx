import { combineReducers } from '@reduxjs/toolkit';
import GoogleAuthReducer from './slices/GoogleAuthSlice';
import taskReducer from './slices/taskSlice';
import calendarReducer from './slices/calendarSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  calendar: calendarReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;