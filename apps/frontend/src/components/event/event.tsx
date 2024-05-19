import type { IEvent } from '../../dataTypes/event';

export type EventProps = {
  event: IEvent;
};

const Event = ({ event }: EventProps) => {
  return (
    <div className='border-gray-300 rounded-lg border p-4 shadow-md'>
      <h2 className='mb-2 text-xl font-semibold'>{event.title}</h2>
      <p className='text-gray-700 mb-4'>{event.description}</p>
    </div>
  );
};

export default Event;
