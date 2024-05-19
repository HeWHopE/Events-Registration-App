import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getAllEvents } from '../app/events/eventThunks';
import type { IEvent } from '../dataTypes/event';
import Event from '../components/event/event';

const Events: React.FC = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.event);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <div className='p-5'>
      <h1 className='mb-5 text-2xl font-bold'>Events</h1>
      <div className='grid h-36 max-w-[900px] gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {events.data.length > 0 ? (
          events.data.map((event: IEvent) => <Event key={event.id} event={event} />)
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
};

export default Events;
