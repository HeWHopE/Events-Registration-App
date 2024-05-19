import type { IEvent } from '../../dataTypes/event';
import { createAppSlice } from '../createAppSlice';
import type { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

type EventState = {
  data: IEvent[];
};

const initialState: EventState = {
  data: [],
};

export const eventSlice = createAppSlice({
  name: 'event', // Correct slice name
  initialState,
  reducers: {
    setEventData: (state, action: PayloadAction<IEvent[]>) => {
      state.data = action.payload;
    },
    addEvent: (state, action: PayloadAction<IEvent>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setEventData, addEvent } = eventSlice.actions;

export const selectEventData = (state: RootState) => state.event.data;

export default eventSlice.reducer;
