import { configureStore } from '@reduxjs/toolkit';
import eventSlice from './events/eventSlice';
import participantSlice from './participants/participantSlice';

export const store = configureStore({
  reducer: {
    event: eventSlice,
    participant: participantSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
