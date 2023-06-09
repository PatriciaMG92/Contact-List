import React from "react";


//create your first component
const ContactForm = ({changeStateToFalse, handleChangeName, handleChangeEmail, handleChangePhone, handleChangeAddress, handleChangeOption, saveChanges}) => {
    

	return (
		<>
            <div className="container-fluid bg-black p-3">
                <div className="container bg-white w-75">
                    <h1 className="pt-3 text-center">Add a new contact</h1>
                    <form className="p-2">
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter full name" onChange={handleChangeName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" onChange={handleChangeEmail}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={handleChangePhone}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter address" onChange={handleChangeAddress}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput3" className="form-label">Choose an option:</label>
                            <select className="form-select" onChange={handleChangeOption}>
                                <option defaultValue>Open this select menu</option>
                                <option value="Family">Family</option>
                                <option value="Co-worker">Co-worker</option>
                                <option value="Friend">Friend</option>
                            </select>
                        </div>
                        <div className="align-middle">
                            <button className="btn btn-primary col-12" onClick={saveChanges}>Save contact</button>
                        </div>
                    </form>
                    <div className="ps-2">
                        <button onClick={()=>changeStateToFalse()} className="btn btn-link">Get back to contact list</button>
                    </div>
                </div>
            </div>
        </>
	);
};

export default ContactForm;