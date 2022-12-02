import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import {AllStaffMembers} from './views/AllStaffMembers';
import { EditStaffMember } from './views/EditStaffMember';
import { OneStaffMember } from './views/OneStaffMember';
import { NewStaffMember } from './views/NewStaffMember';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Staffing Planner</h1>
          <div className="navbar-nav justify-content-between">
            <Link
              to="/staffmembers"
              className='btn btn-sm btn-outline-primary mx-1'>
                All StaffMembers
            </Link>
            <Link
              to="/staffmembers/new"
              className='btn btn-sm btn-outline-primary mx-1'>
                New StaffMember
            </Link>
          </div>
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/staffmembers' replace/>}/>
        <Route path="/staffmembers" element={<AllStaffMembers/>}/>
        <Route path="/staffmembers/:id/edit" element={<EditStaffMember/>}/>
        <Route path="/staffmembers/:id" element={<OneStaffMember/>}/>
        <Route path="/staffmembers/new" element={<NewStaffMember/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
