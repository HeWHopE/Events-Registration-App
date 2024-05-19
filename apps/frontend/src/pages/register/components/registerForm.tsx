import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
import { createParticipant } from '../../../app/participants/participantThunks';
import { useEffect, useState } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
type FormValues = {
  fullName: string;
  email: string;
  dob: string;
  source: string;
};

const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/events');
    }
  }, [id, navigate]);

  if (!id) {
    return null;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = data => {
    setIsLoading(true);
    const date = new Date(data.dob);
    dispatch(createParticipant({ ...data, eventId: +id, dob: date.toISOString() }));
    setTimeout(() => {
      setIsLoading(false);
      navigate('/events');
    }, 2000);
  };

  return (
    <div className='items-center flex flex-col mt-10'>
      <h1 className='text-2xl font-bold mb-5 justify-start text-black'>Event registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='w-2/6 mt-4 mb-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700' htmlFor='fullName'>
            Full name
          </label>
          <input
            type='text'
            id='fullName'
            maxLength={40}
            {...register('fullName', { required: true })}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.fullName && <p className='text-red-500 text-sm mt-1'>Full name is required.</p>}
        </div>
        <div className='mt-4 mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: true })}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>Email is required.</p>}
        </div>
        <div className='mt-4 mb-4'>
          <label className='block text-sm font-medium text-gray-700' htmlFor='dob'>
            Date of birth
          </label>
          <input
            type='date'
            id='dob'
            {...register('dob', { required: true })}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
          />
          {errors.dob && <p className='text-red-500 text-sm mt-1'>Date of birth is required.</p>}
        </div>
        <fieldset className='mt-4 mb-4'>
          <legend className='block text-sm font-medium text-gray-700 mb-2'>Where did you hear about this event?</legend>
          <div className='flex items-center mb-2'>
            <input
              type='radio'
              id='socialMedia'
              {...register('source', { required: true })}
              value='socialMedia'
              className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
            />
            <label htmlFor='socialMedia' className='ml-3 block text-sm text-gray-700'>
              Social media
            </label>
          </div>
          <div className='flex items-center mb-2'>
            <input
              type='radio'
              id='friends'
              {...register('source', { required: true })}
              value='friends'
              className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
            />
            <label htmlFor='friends' className='ml-3 block text-sm text-gray-700'>
              Friends
            </label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='foundMyself'
              {...register('source', { required: true })}
              value='foundMyself'
              className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
            />
            <label htmlFor='foundMyself' className='ml-3 block text-sm text-gray-700'>
              Found myself
            </label>
          </div>
          {errors.source && <p className='text-red-500 text-sm mt-1'>This field is required.</p>}
        </fieldset>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-1/2 flex justify-center gap-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          >
            {isLoading && <Spinner color='white' size={20} />} Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
