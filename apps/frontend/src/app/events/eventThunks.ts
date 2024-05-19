import { createAsyncThunk } from '@reduxjs/toolkit';
import { setEventData } from './eventSlice';
import { instance } from '../../api/axios.api';
import handleError from '../../api/handleError.api';
export const getAllEvents = createAsyncThunk('event', async (_, { dispatch }) => {
  try {
    const response = await instance.get('/event');
    console.log('Full response:', response);
    const data = response.data;
    console.log('Data:', data);

    dispatch(setEventData(data));
  } catch (e) {
    console.error('Error caught:', e);
    const error = e as Error;
    handleError(error);
  }
});
