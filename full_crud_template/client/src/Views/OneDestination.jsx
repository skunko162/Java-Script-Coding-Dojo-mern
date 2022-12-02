import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getDestinationById , deleteDestination} from '../services/internalApiService';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [destination, setDestination] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getDestinationById(id)
            .then((data) => {
                setDestination(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    const handleDeleteClick = () => {
        deleteDestination(id)
            .then((data) => {
                navigate('/destinations')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    if (destination === null) {
        return null;
    }
    
    const { location, description, summer, winter, spring, fall, srcType, src } = destination
    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{location}</h4>
            <p>{description}</p>
            <h5>Travel seasons</h5>
            <ul className="list-group">
                {summer && <li className="list-group-item">Summer</li>}
                {spring && <li className="list-group-item">Spring</li>}
                {fall && <li className="list-group-item">Fall</li>}
                {winter && <li className="list-group-item">Winter</li>}
            </ul>
            {srcType === "img" && (
                <img className='shadow rounded' width="100%" src={src} alt={location} />
            )}

            {srcType === "Google Maps Embed" && (
                <iframe
                    src={src}
                    title={description}
                    width="100%"
                    height="800"
                    frameborder="0"
                    loading='lazy'
                    className='shadow rounded'
                ></iframe>
            )}
            {srcType === "Youtube Embed" && (
                <iframe
                    src={src}
                    title={description}
                    width="100%"
                    height="800"
                    frameborder="0"
                    loading='lazy'
                    className='shadow rounded'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            )}

            <button
            className="btn btn-sm btn-outline-danger mx-auto"
            onClick={()=> {
                handleDeleteClick()
            }}> Delete</button>

        </div>
    )
}