import { Link } from 'react-router-dom';
import type { IEvent } from '../../dataTypes/event';

export type EventProps = {
  event: IEvent;
};

const Event = ({ event }: EventProps) => {
  return (
    <div className='border-gray-300 rounded-sm border p-3 shadow-md'>
      <h2 className='mb-2 truncate text-xl font-semibold'>{event.title}</h2>
      <p className='text-gray-700 mb-4 truncate'>{event.description}</p>
      <div className='ml-10 mr-10 flex justify-between'>
        <Link to={`/event/${event.id}`} className=' text-blue-600 hover:underline'>
          Register
        </Link>
        <p className='text-blue-600 cursor-pointer hover:underline'>View</p>
      </div>
    </div>
  );
};

export default Event;
