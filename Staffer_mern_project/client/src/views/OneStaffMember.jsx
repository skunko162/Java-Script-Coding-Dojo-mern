import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getStaffMemberById , deleteStaffMember} from '../services/internalApiService';

export const OneStaffMember = (props) => {
    const { id } = useParams();
    const [staffmember, setStaffMember] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getStaffMemberById(id)
            .then((data) => {
                setStaffMember(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteStaffMember(id)
            .then((data) => {
                navigate('/staffmembers')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    if (staffmember === null) {
        return null;
    }
    
    const { firstName, lastName , specialty, employment_start_date, routine_area } = staffmember
    return (
        <div className="w-20 p-2 rounded mx-auto shadow">
            <h4>{firstName} {lastName}</h4>
            <p>Specialty: {specialty}</p>
            <p>Start of Employment: {employment_start_date}</p>
            <p>Routine Department: {routine_area}</p>

            <button
            className="btn btn-sm btn-outline-danger mx-auto"
            onClick={()=> {
                handleDeleteClick()
            }}> Delete</button>

        </div>
    )
}