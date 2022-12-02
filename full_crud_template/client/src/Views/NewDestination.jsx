import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDestination } from '../services/internalApiService'

export const NewDestination = (props) => {
    const [formData, setFormData] = useState({
        location: '',
        description: '',
        src: '',
        srcType: 'img',
        summer: false,
        spring: false,
        winter: false,
        fall: false,
    })

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) {
            if (formData[key] === false) {
                delete formData[key];
            }
        }
        createDestination(formData)
            .then((data) => {
                console.log('new destination data:', data)
                navigate(`/destinations/${data._id}`)
            })
            .catch((error) => {
                console.log(error.response?.data?.errors);
                setErrors(error.response?.data?.errors)
            })
    }

    const handleFormChanges = (e) => {
        if (e.target.checked) {
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

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <h3 className="text-center"> New Destination</h3>

            <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
                <div className="form-group">
                    <label className="h6">Location</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="location"
                        value={formData.location}
                        className="form-control"
                    />
                {
                    errors?.location && (
                        <span className="text-danger">{errors.location?.message}</span>
                    )
                }
                </div>
                <div className="form-group">
                    <label className="h6">description</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="description"
                        value={formData.description}
                        className="form-control"
                    />
                </div>
                {
                    errors?.description && (
                        <span className="text-danger">{errors.description?.message}</span>
                    )
                }
                <div className="form-group">
                    <label className="h6">Media Url</label>
                    <input
                        onChange={handleFormChanges}
                        type="text"
                        name="src"
                        value={formData.src}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Media Type</label>
                    <select
                        onChange={handleFormChanges}
                        type="text"
                        name='srcType'
                    >
                        <option value='img'>Image</option>
                        <option value='Google Maps Embed'>Google Maps Embed</option>
                        <option value='Youtube Embed'>Youtube Embed</option>
                    </select>
                </div>
                <hr />
                <h5>Travel Seasons</h5>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="summer"
                        type="checkbox"
                    />
                    <label className='h6 form-check-lable'>Summer</label>
                </div>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="spring"
                        type="checkbox"
                    />
                    <label className='h6 form-check-lable'>Spring</label>
                </div>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="fall"
                        type="checkbox"
                    />
                    <label className='h6 form-check-lable'>Fall</label>
                </div>
                <div className="form-check">
                    <input
                        onChange={handleFormChanges}
                        name="winter"
                        type="checkbox"
                    />
                    <label className='h6 form-check-lable'>Winter</label>
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    )
}