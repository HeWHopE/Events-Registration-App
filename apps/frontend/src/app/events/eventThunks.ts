import { createAsyncThunk } from '@reduxjs/toolkit';
import { addEvent, setCurrentEvent, setEventData } from './eventSlice';
import { instance } from '../../api/axios.api';
import handleError from '../../api/handleError.api';
import type { IEvent } from '../../dataTypes/event';

export const getAllEvents = createAsyncThunk(
  'event',
  async ({ limit, offset }: { limit: number; offset: number }, { dispatch }) => {
    try {
      const response = await instance.get('/event', {
        params: { limit, offset },
      });
      const data = response.data;

      dispatch(setEventData(data));
    } catch (e) {
      console.error('Error caught:', e);
      const error = e as Error;
      handleError(error);
    }
  },
);

export const getEvent = createAsyncThunk('event', async (id: number, { dispatch }) => {
  try {
    const response = await instance.get('/event/' + id);

    const data = response.data;

    dispatch(setCurrentEvent(data));
  } catch (e) {
    const error = e as Error;
    handleError(error);
  }
});

export const createEvent = createAsyncThunk('event', async (data: IEvent, { dispatch }) => {
  try {
    const response = await instance.post('/event', data);
    dispatch(addEvent(response.data));
  } catch (e) {
    const error = e as Error;
    handleError(error);
  }
});
