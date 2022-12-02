import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllStaffMembers, deleteStaffMember } from "../services/internalApiService"



export const AllStaffMembers = (props) => {
    const [staffmembers, setStaffMembers] = useState([])

    useEffect(()=>{
        getAllStaffMembers()
            .then((data) => {
                setStaffMembers(data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []) 

    const handleDeleteClick = (idToDelete) => {
        deleteStaffMember(idToDelete)
        .then((data) => {
            console.log(data)
            const filteredStaffMembers = staffmembers.filter((staffmember) => {
                return staffmember._id !== idToDelete
            })
            setStaffMembers(filteredStaffMembers)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
// save reference for drag item and dragover item 
    const dragItem = React.useRef(null)
    const dragOverItem = React.useRef(null)

    // const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: Number) => {
    //     console.log("drag started", index)
    // }
    // const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: Number) => {
    //     console.log("drag enter", index)
    // }
    // const onDragEnd = (e: React.DragEvent<HTMLDivElement>, index: Number) => {
    //     console.log("drag end", index)
    // }
    //handle drag sort
    const handleSort = (e) => {
// duplicate items
        let staffMembersClone = structuredClone(staffmembers)
//remove and save the dragged item content
        const draggedItemContent= staffMembersClone.splice(dragItem.current, 1)[0]
        console.log(draggedItemContent)
//switch position
        staffMembersClone.splice(dragOverItem.current, 0, draggedItemContent)
//reset the position ref
        dragItem.current= null
        dragOverItem.current=null
//update the array
        console.log(staffMembersClone)
        setStaffMembers(staffMembersClone)
    }
    return (
        <div className="w-50 mx-auto text-center" >
            <h2>Staff Members</h2>
            {staffmembers.map((staffmember, i) => {
                const {_id, firstName, lastName, specialty,routine_area } = staffmember;
                return (
                        <div className="shadow mb-4 rounded border p-4" 
                        key = {_id}
                        draggable
                        onDragStart={(e)=>(dragItem.current = i)}
                        onDragEnter={(e) => (dragOverItem.current = i)}
                        onDragEnd ={handleSort}
                        onDragOver={(e)=> e.preventDefault()}>
                            <Link to={`/staffmembers/${_id}`}><h4>Name: { firstName } { lastName }</h4></Link>
                            <p>Specialty: {specialty}</p>
                            <p>Routine Department: {routine_area}</p>
                            <button 
                            className="btn btn-sm btn-outline-danger mx-1"
                            onClick={(e)=> {
                                handleDeleteClick(_id)
                            }}
                            >
                                Delete
                            </button>
                            <button className="btn btn-sm btn-outline-danger mx-1"><Link to={`/staffmembers/${_id}/edit`}> Edit </Link></button>
                        </div>
                    )}
                )
            }
        </div>
    )
}