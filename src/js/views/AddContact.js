import React from "react";

const AddContact = () => {
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
          />
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
          />
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
          />
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
          />
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
