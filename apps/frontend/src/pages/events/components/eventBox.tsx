import { Link } from 'react-router-dom';
import type { IEvent } from '../../../dataTypes/event';

export type EventProps = {
  event: IEvent;
};

const EventBox = ({ event }: EventProps) => {
  return (
    <div className='border-gray-300 rounded-sm border p-3 shadow-md max-w-full sm:max-w-sm lg:max-w-md xl:max-w-lg'>
      <h2 className='mb-2 truncate text-lg sm:text-xl font-semibold'>{event.title}</h2>
      <p className='text-gray-700 mb-4 truncate'>{event.description}</p>
      <div className='flex justify-between'>
        <Link to={`/event/${event.id}`} className='text-blue-600 hover:underline'>
          Register
        </Link>
        <Link to={`/event/view/${event.id}`} className='text-blue-600 hover:underline'>
          View
        </Link>{' '}
      </div>
    </div>
  );
};

export default EventBox;
