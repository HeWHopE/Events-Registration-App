import { Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Events from './pages/events';
import './output.css';
import RegisterPage from './pages/register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' Component={Events} />
        <Route path='/events' Component={Events} />
        <Route path='/event/:id' Component={RegisterPage} />
      </Routes>
    </>
  );
}

export default App;
