import React from "react";
import SingleContact from "./singleContact.jsx";


//create your first component
const ContactList = ({changeStateToTrue, allContacts, setAllContacts, getOneContact}) => {
   
	const updateOneSingleContact=(id, fullNameInput, email, phoneInput, addressInput, optionInput)=>{
		const contact = allContacts.get(email)
		const newContact = {
			...contact,
			id: id,
			name : fullNameInput,
			phone: phoneInput,
			address: addressInput,
			option: optionInput,
		}
		allContacts.set(email, newContact)
		setAllContacts(new Map(allContacts))
	}

	const deleteContact=(email)=>{
		allContacts.delete(email)
		setAllContacts(new Map(allContacts))
	}

	return (
		<>
            <div className="container-fluid bg-black p-3">
				<div className="container bg-white w-75">
					<div className="d-flex justify-content-end p-3 pe-4">
						<button onClick={()=>changeStateToTrue()} className="btn btn-success">Add new contact</button>
					</div>
					<div>
						<ul className="list-group text-start border">
							{Array.from(allContacts.values()).map((item, index)=>{return <SingleContact  {...item} id={item.id} key={index} updateOneSingleContact={updateOneSingleContact} deleteContact={deleteContact}/>})}
            			</ul>
					</div>
				</div>
			</div>
        </>
	);
};

export default ContactList;