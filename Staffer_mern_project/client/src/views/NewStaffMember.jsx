import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createStaffMember } from '../services/internalApiService'

export const NewStaffMember = (props) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        employment_start_date: '',
        routine_area: '',
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        createStaffMember(formData)
            
            .then((data) => {
                console.log('new staffmember data:', data)
                navigate(`/staffmembers/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Staff Member</h3>

            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">First Name:</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        className="form-control"
                    />
                {
                    errors?.firstName && (
                        <span className="text-danger">{errors.firstName?.message}</span>
                    )
                }
                </div>
                <div className="form-group">
                    <label className="h6">Last Name:</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        className="form-control"
                    />
                </div>
                {
                    errors?.lastName && (
                        <span className="text-danger">{errors.lastName?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Specialty:</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        className="form-control"
                    />
                </div>
                {
                    errors?.specialty && (
                        <span className="text-danger">{errors.specialty?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Employment Start Date:</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="employment_start_date"
                        value={formData.employment_start_date}
                        className="form-control"
                    />
                </div>
                {
                    errors?.employment_start_date && (
                        <span className="text-danger">{errors.employment_start_date?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Routine Department:</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="routine_area"
                        value={formData.routine_area}
                        className="form-control"
                    />
                </div>
                {
                    errors?.routine_area && (
                        <span className="text-danger">{errors.routine_area?.message}</span>
                    )
                }
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}