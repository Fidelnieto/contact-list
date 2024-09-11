import React, { useContext } from "react";
import { Context } from "../store/appContext";

const AddContact = () => {

  const {state, stateActions} = useContext(Context)

  return (
    <div className="text-center container">
      <h1>Add a new contact</h1>
      <form className="form">
        <div className="mb-3">
          <label
            htmlFor="first-name"
            className="form-label d-flex justify-content-start"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="first-name"
            className="form-control"
            onChange={event =>{
              stateActions({type: "add", payload: { name: event.target.value}})
            }}
          />
          <span>{state.name}</span>
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label d-flex justify-content-start"
            
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            id="email"
            onChange={event =>{
              stateActions({type: "add", payload: { email: event.target.value}})
            }}
          />
          <span>{state.email}</span>
        </div>
        <div className="mb-3">
          <label
            htmlFor="phoneNumber"
            className="form-label d-flex justify-content-start "
          >
            Phone
          </label>
          <input
            type="number"
            placeholder="Enter Phone"
            className="form-control"
            id="phoneNumber"
            onChange={event =>{
              stateActions({type: "add", payload: { phone: event.target.value}})
            }}
          />
          <span>{state.phone}</span>
        </div>
        <div className="mb-3">
          <label
            htmlFor="address"
            className="form-label d-flex justify-content-start"
          >
            Address
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            className="form-control"
            id="address"
            onChange={event =>{
              stateActions({type: "add", payload: { address: event.target.value}})
            }}
          />
          <span>{state.address}</span>
        </div>
        <div>
          <input
            type="submit"
            value="Save"
            className="form-control btn btn-primary"
          />
        </div>
      </form>
      <a href="/" className="d-flex justify-content-start">
        Back to contacts
      </a>
    </div>
  );
};

export default AddContact;
