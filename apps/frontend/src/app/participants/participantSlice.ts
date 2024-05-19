import type { IParticipant } from '../../dataTypes/participant';
import { createAppSlice } from '../createAppSlice';
import type { RootState } from '../store';
import type { PayloadAction } from '@reduxjs/toolkit';

type ParticipantState = {
  data: IParticipant[];
};

const initialState: ParticipantState = {
  data: [],
};

export const ParticipantSlice = createAppSlice({
  name: 'event',
  initialState,
  reducers: {
    setParticipantData: (state, action: PayloadAction<IParticipant[]>) => {
      state.data = action.payload;
    },
    addParticipant: (state, action: PayloadAction<IParticipant>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setParticipantData, addParticipant } = ParticipantSlice.actions;

export const ParticipantEventData = (state: RootState) => state.participant.data;

export default ParticipantSlice.reducer;
