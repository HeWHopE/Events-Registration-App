import type React from 'react';
import type { IParticipant } from '../../../dataTypes/participant';

interface ViewProps {
  participants: IParticipant[];
}

const View: React.FC<ViewProps> = ({ participants }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10'>
      {participants.length > 0 ? (
        participants.map(participant => (
          <div key={participant.id} className='border p-5 mb-2 w-full '>
            <p className='font-bold truncate max-w-32'>{participant.fullName}</p>
            <p>{participant.email}</p>
          </div>
        ))
      ) : (
        <p>No participants available</p>
      )}
    </div>
  );
};

export default View;
