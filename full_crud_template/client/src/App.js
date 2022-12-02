import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {AllDestinations} from './views/AllDestinations';
import { EditDestination } from './views/EditDestination';
import { OneDestination } from './views/OneDestination';
import { NewDestination } from './views/NewDestination';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Trip planner</h1>
          <div className="navbar-nav justify-content-between">
            <Link
              to="/destinations"
              className='btn btn-sm btn-outline-primary mx-1'>
                All Destinations
            </Link>
            <Link
              to="/destinations/new"
              className='btn btn-sm btn-outline-primary mx-1'>
                New Destination
            </Link>
          </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/destinations' replace/>}/>
        <Route path="/destinations" element={<AllDestinations/>}/>
        <Route path="/destinations/:id/edit" element={<EditDestination/>}/>
        <Route path="/destinations/:id" element={<OneDestination/>}/>
        <Route path="/destinations/new" element={<NewDestination/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;