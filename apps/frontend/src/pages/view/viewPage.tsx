import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import { getParticipantsByID } from '../../app/participants/participantThunks';
import View from './components/viewBox';
import { getEvent } from '../../app/events/eventThunks';

const ViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const participants = useAppSelector(state => state.participant);
  const event = useAppSelector(state => state.event.currentEvent);

  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (id) {
      dispatch(getParticipantsByID(Number(id)));
      dispatch(getEvent(Number(id)));
    }
  }, [id, dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredParticipants = participants.data.filter(
    participant =>
      participant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='m-10'>
      <div className='flex justify-between'>
        <h1 className='text-4xl truncate'>&quot;{event?.title}&quot; participants</h1>
        {filteredParticipants.length > 0 && (
          <input
            type='text'
            placeholder='Search participants by name or email'
            value={searchQuery}
            onChange={handleSearchChange}
            className='mt-4 p-2 border border-gray-300 rounded-md shadow-sm w-1/4'
          />
        )}
      </div>
      <div className='mt-4'>
        {filteredParticipants.length > 0 ? (
          <>
            <View participants={filteredParticipants} />
          </>
        ) : (
          <p className='items-center justify-center flex'>No participants available</p>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
