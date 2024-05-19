import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Events from './pages/events/eventsPage';
import './output.css';
import RegisterPage from './pages/register/registerPage';
import ViewPage from './pages/view/viewPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' Component={Events} />
        <Route path='/events' Component={Events} />
        <Route path='/event/:id' Component={RegisterPage} />
        <Route path='/event/view/:id' Component={ViewPage} />
      </Routes>
    </>
  );
}

export default App;
