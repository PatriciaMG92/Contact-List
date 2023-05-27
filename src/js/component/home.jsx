import React, { useEffect } from "react";
import { useState } from "react";
import ContactForm from "./contactForm.jsx";
import ContactList from "./contactList.jsx";



//create your first component
const Home = () => {

	const [isFormActivated, setIsFormActivated] = useState();
	const [allContacts, setAllContacts] = useState(new Map());
	const [fullNameInput, setFullNameInput] = useState();
	const [emailInput, setEmailInput] = useState();
	const [phoneInput, setPhoneInput] = useState();
	const [addressInput, setAddressInput] = useState();

	useEffect(()=>{
		getAllContacts();
	}, []);

	const changeStateToFalse = (isFormActivated)=> {
		setIsFormActivated(isFormActivated = false)
	}
	const changeStateToTrue = (isFormActivated) => {
		setIsFormActivated(isFormActivated = true)
	}

	const handleChangeName=(e)=>{
		setFullNameInput(e.target.value);
	}
	const handleChangeEmail=(e)=>{
		setEmailInput(e.target.value);
	}
	const handleChangePhone=(e)=>{
		setPhoneInput(e.target.value);
	}
	const handleChangeAddress=(e)=>{
		setAddressInput(e.target.value);
	}


	const saveChanges = (e)=>{
		e.preventDefault();
		if(fullNameInput=='' || phoneInput=='' || addressInput=='' || emailInput=='' ){
			alert ("Please you must fill this input");
		}else{
			const id = Array.from(allContacts).length
			allContacts.set(emailInput, {id: id,
				name: fullNameInput,
				email: emailInput,
				phone: phoneInput,
				address: addressInput}
			) 
			setAllContacts(allContacts);
			setFullNameInput('');
			setEmailInput('');
			setPhoneInput('');
			setAddressInput('');
		}
		document.getElementById("fullName").value='';
		document.getElementById("email").value='';
		document.getElementById("phone").value='';
		document.getElementById("address").value='';
	}

	const getAllContacts= async()=>{
		await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/agendapatricia',{
			headers: {
				"Content-Type": "application/json"
			  }
			})
		.then((resp) => {
			if (!resp.ok){
			    postAllContacts()
			} else{
				return resp.json();
			}
			
		})
		.then((users) => {
			// setAllContacts(users);
			users.forEach(({name, phone, email, address, id})=>{allContacts.set([Date.now(), {id: id, name:name, phone:phone, email: email, address:address }])})
		})
	}

	const postAllContacts = async() => {
		await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/agendapatricia', {
		method: 'POST',
		body:[],
		headers: {
			"Content-Type": "application/json"
		  }
		})
		.then((resp) => {
			if (!resp.ok){
				throw new Error(response.statusText);  
			}
			getAllContacts ()
		})
		
	}

	const updateContacts = async()=>{
		await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/agendapatricia',{
			method: 'PUT',
			body: JSON.stringify(contacts),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp=>{
			return resp.json();
		})
		.then(data=>{
			console.log("Success:", data)
		})
		.catch(error=>{
			console.log('Looks like there was a problem: \n', error)
		})
	}

	const getOneContact = async(id)=>{
		await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((resp) => {
			if (!resp.ok){
			    postAllContacts()
			} else{
				return resp.json();
			}
			
		})
		.then((user) => {
			setAllContacts(user);
		})
	}

	if(isFormActivated == false){
		return <ContactList changeStateToTrue={changeStateToTrue} allContacts={allContacts} setAllContacts={setAllContacts} getOneContact={getOneContact}/>
	} else{
		return <ContactForm changeStateToFalse={changeStateToFalse} handleChangeName={handleChangeName} handleChangeEmail={handleChangeEmail} handleChangePhone={handleChangePhone} handleChangeAddress={handleChangeAddress} saveChanges={saveChanges}/>
	}
	
};

export default Home;
