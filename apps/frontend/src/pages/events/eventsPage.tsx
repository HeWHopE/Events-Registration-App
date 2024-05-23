import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createEvent, getAllEvents } from '../../app/events/eventThunks';
import type { IEvent } from '../../dataTypes/event';
import EventBox from './components/eventBox';
import AddEventBox from './components/addEventBox';
import Popup from '../../components/UI/Popup/Popup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SortOptions from './components/sortOptions';
import Spinner from '../../components/UI/Spinner/Spinner';

type FormValues = {
  organizer: string;
  title: string;
  description: string;
  eventDate: string;
};

const Events: React.FC = () => {
  const dispatch = useAppDispatch();
  const events = useAppSelector(state => state.event);
  const [sortOption, setSortOption] = useState<string>('date');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    dispatch(getAllEvents({ limit: 35, offset: 0 }));
    console.log('Fetching events');

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10 &&
        !isFetching
      ) {
        loadMoreEvents();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loadMoreEvents = () => {
    setIsFetching(true);
    const newOffset = offset + 35;
    setOffset(newOffset);
    dispatch(getAllEvents({ limit: 6, offset: newOffset })).finally(() => {
      setIsFetching(false);
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    const date = new Date(data.eventDate);
    console.log(date.toISOString());
    console.log(data);
    dispatch(createEvent({ ...data, eventDate: date.toISOString() }));
    setIsPopupOpen(false);
  };

  const sortedEvents = [...events.data].sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'organizer') {
      return a.organizer.localeCompare(b.organizer);
    } else if (sortOption === 'date') {
      return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime();
    }
    return 0;
  });

  const addEventClick = () => {
    reset();
    setIsPopupOpen(true);
  };

  return (
    <>
      <div className='p-5 flex justify-between mx-28'>
        <h1 className='mb-5 text-xl font-bold'>Events</h1>
        <SortOptions sortOption={sortOption} onSortChange={handleSortChange} />
      </div>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 mx-28 mb-20'>
        {sortedEvents.length > 0 &&
          sortedEvents.map((event: IEvent) => (
            <div key={event.id}>
              <EventBox event={event} />
            </div>
          ))}
        <div onClick={addEventClick}>
          <AddEventBox />
        </div>
      </div>
      {isFetching && (
        <div className='flex items-center justify-center'>
          <Spinner color='blue' size={50} />
        </div>
      )}
      <Popup popupIsOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)} modalFullClassName='w-[600px]'>
        <h1 className='text-xl font-bold mb-4 flex items-center justify-center'>Add Event</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='organizer' className='block text-sm font-medium text-gray-700'>
              Organizer
            </label>
            <input
              type='text'
              id='organizer'
              {...register('organizer', { required: 'Organizer is required' })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.organizer && <p className='text-red-500'>{errors.organizer.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700'>
              Title
            </label>
            <input
              type='text'
              id='title'
              {...register('title', { required: 'Title is required' })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea
              id='description'
              {...register('description', { required: 'Description is required' })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
          </div>
          <div className='mb-4'>
            <label htmlFor='eventDate' className='block text-sm font-medium text-gray-700'>
              Event Date
            </label>
            <input
              type='date'
              id='eventDate'
              {...register('eventDate', { required: 'Event date is required' })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.eventDate && <p className='text-red-500'>{errors.eventDate.message}</p>}
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Add Event
            </button>
          </div>
        </form>
      </Popup>
    </>
  );
};

export default Events;
