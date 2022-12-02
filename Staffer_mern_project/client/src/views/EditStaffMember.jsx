import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateStaffMember, getStaffMemberById } from '../services/internalApiService';

export const EditStaffMember = (props) => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        specialty: '',
        employment_start_date: '',
        routine_area: '',
    })

    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    useEffect(() => {
        getStaffMemberById(id)
            .then((data) => {
                setFormData(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key];
            }
        }
        updateStaffMember(id, formData)
            .then((data) => {
                console.log('new staffmember data:', data)
                navigate('/staffmembers')
            })
            .catch((error) => {
                console.log(error.response);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        console.log("here in the change", e.target.checked)
        if (e.target.type === "checkbox") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.checked,
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (formData === null) {
        return null
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
                </div>
                {
                    errors?.firstName && (
                        <span className="text-danger">{errors.firstName?.message}</span>
                    )
                }
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
                    <label className="h6">Specialty: </label>
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
                    <label className="h6">Employment Start Date: </label>
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
                    <label className="h6">Routine Department</label>
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