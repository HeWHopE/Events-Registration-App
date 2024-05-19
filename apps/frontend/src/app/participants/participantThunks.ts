import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/axios.api';
import handleError from '../../api/handleError.api';
import type { IParticipant } from '../../dataTypes/participant';
import { setParticipantData } from './participantSlice';

export const getParticipantsByID = createAsyncThunk(
  'participant/getParticipantsByID',
  async (id: number, { dispatch }) => {
    try {
      const response = await instance.get('/participant/event/' + id);
      dispatch(setParticipantData(response.data));
      return response.data;
    } catch (e) {
      const error = e as Error;
      handleError(error);
    }
  },
);

export const createParticipant = createAsyncThunk(
  'participant/createParticipant',
  async (participant: IParticipant) => {
    try {
      const response = await instance.post('/participant', participant);
      return response.data;
    } catch (e) {
      const error = e as Error;
      handleError(error);
    }
  },
);
