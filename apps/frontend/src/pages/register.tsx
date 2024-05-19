import { useParams } from 'react-router-dom';
import Register from '../components/register/register';

const RegisterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log('id', id);

  return (
    <div>
      <Register />
    </div>
  );
};

export default RegisterPage;
