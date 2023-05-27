import React from "react";

const SingleContact = ({name, address, phone, email, updateOneSingleContact, id, deleteContact}) =>{

    return(
        <>
            <li className="row pb-2 pt-2 border-bottom">
                <div className="col-3 ps-5">
                    <img id="image" src="https://th.bing.com/th/id/R.a2de0db2291fe6bcd40ca28111ac2a67?rik=Hxv4cBjQsGT4bQ&pid=ImgRaw&r=0"></img>
                </div>
                <div className="col-6 ps-4">
                    <p id="p_Name" className="mb-1">{name}</p>
                    <p id="p_Address" className="d-flex gap-2"><span className="material-symbols-outlined">
                        location_on
                    </span>  {address}</p>
                    <p id="p_Phone" className="d-flex gap-2"><span className="material-symbols-outlined">
                        call
                    </span>{phone}</p>
                    <p id="p_Email" className="d-flex gap-2"><span className="material-symbols-outlined">
                        mail
                    </span>{email}</p>
                </div>
                <div className="col-3 align-items-center pt-3 gap-4">
                    <span className="material-symbols-outlined pe-5" onClick={()=>{updateOneSingleContact(id)}}>edit</span>
                    <span className="material-symbols-outlined" data-bs-toggle="modal" data-bs-target={`#delete-modal${id}`}>delete</span>
                </div>
            </li>

            <div className="modal fade" id={`delete-modal${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Your are going to delete this contact. This change cannot be undone.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                            <span>{email}</span>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>{deleteContact(email)}} >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleContact;