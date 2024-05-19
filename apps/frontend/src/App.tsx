import { Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Events from './pages/events';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' Component={Events} />
        <Route path='/events' Component={Events} />
        <Route path='/event/:id' element={<div>Event Details Page</div>} />
      </Routes>
    </>
  );
}

export default App;
