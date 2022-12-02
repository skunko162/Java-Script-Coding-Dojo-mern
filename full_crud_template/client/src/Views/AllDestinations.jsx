import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllDestinations, deleteDestination } from "../services/internalApiService"

export const AllDestinations = (props) => {
    const [destinations, setDestinations] = useState([])

    useEffect(()=>{
        getAllDestinations()
            .then((data) => {
                setDestinations(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []) 

    const handleDeleteClick = (idToDelete) => {
        deleteDestination(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredDestinations = destinations.filter((destination) => {
                return destination._id !== idToDelete
            })
            setDestinations(filteredDestinations)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h2>Travel Destinations</h2>
            {destinations.map((destination, i) => {
                const {_id, location, description, summer,winter,spring,fall} = destination;
                return (
                    <div key={i} className="shadow mb-4 rounded border p-4">
                        <Link to={`/destinations/${_id}`}>
                            <h4>{location}</h4>
                        </Link>
                        <p>{description}</p>
                        <h5>Travel Seasons:</h5>
                        <ul className="list-group">
                            {summer && <li className="list-group-item">Summer</li>}
                            {spring && <li className="list-group-item">Spring</li>}
                            {fall && <li className="list-group-item">Fall</li>}
                            {winter && <li className="list-group-item">Winter</li>}
                        </ul>
                        <button 
                        className="btn btn-sm btn-outline-danger mx-1"
                        onClick={(e)=> {
                            handleDeleteClick(_id)
                        }}
                        >
                            Delete
                        </button>
                        <Link to={`/destinations/${_id}/edit`}> Edit </Link>
                    </div>
                )
            })}
        </div>
    )
}