import type { IEvent } from '../../dataTypes/event';
import { createAppSlice } from '../createAppSlice';
import type { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

type EventState = {
  data: IEvent[];
  currentEvent: IEvent | null;
};

const initialState: EventState = {
  data: [],
  currentEvent: null,
};

export const eventSlice = createAppSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventData: (state, action: PayloadAction<IEvent[]>) => {
      state.data = [...state.data, ...action.payload];
    },
    addEvent: (state, action: PayloadAction<IEvent>) => {
      state.data.push(action.payload);
    },
    setCurrentEvent: (state, action: PayloadAction<IEvent>) => {
      state.currentEvent = action.payload;
    },
  },
});

export const { setEventData, addEvent, setCurrentEvent } = eventSlice.actions;

export const selectEventData = (state: RootState) => state.event.data;

export default eventSlice.reducer;
