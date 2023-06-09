import React from "react";


//create your first component
const ContactForm = ({changeStateToFalse, handleChangeName, handleChangeEmail, handleChangePhone, handleChangeAddress, handleChangeOption, saveChanges}) => {
    

	return (
		<>
            <div className="container-fluid p-3 mt-5">
                <div className="container w-75">
                    <h1 className="pt-3 text-center" style={{color:'#FFD700', textShadow: '2px 2px #2a2a2a'}}>ADD A NEW CONTACT</h1>
                    <form className="p-2">
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label name fw-bold">Full Name</label>
                            <input type="text" className="form-control input" id="fullName" placeholder="Enter full name" onChange={handleChangeName}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label email fw-bold">Email</label>
                            <input type="text" className="form-control input" id="email" placeholder="Enter email" onChange={handleChangeEmail}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label phone fw-bold">Phone</label>
                            <input type="text" className="form-control input" id="phone" placeholder="Enter phone" onChange={handleChangePhone}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label address fw-bold">Address</label>
                            <input type="text" className="form-control input" id="address" placeholder="Enter address" onChange={handleChangeAddress}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput3" className="form-label option fw-bold">Choose an option:</label>
                            <select className="form-select input" onChange={handleChangeOption}>
                                <option defaultValue>Open this select menu</option>
                                <option value="Family">Family</option>
                                <option value="Co-worker">Co-worker</option>
                                <option value="Friend">Friend</option>
                            </select>
                        </div>
                        <div className="align-middle">
                            <button className="btn save col-12" onClick={saveChanges}>Save contact</button>
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