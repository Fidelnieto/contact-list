import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { state, stateActions } = useContext(Context);
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (contact.phone.length > 8) {
      alert("You cannot exceed 8 digits");
    } else {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/contact/agendas/fidelnieto/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          }
        );
        const translatedResponse = await response.json();
        console.log(translatedResponse);

        stateActions({
          type: "add",
          payload: translatedResponse,
        });
        navigate("/");
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
  };

  return (
    <div className="text-center container">
      <h1>Add a new contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="form-label d-flex justify-content-start"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            className="form-control"
            value={contact.name}
            onChange={handleChange}
            required
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
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="phone"
            className="form-label d-flex justify-content-start "
          >
            Phone
          </label>
          <input
            type="number"
            placeholder="Enter Phone"
            className="form-control"
            id="phone"
            value={contact.phone}
            onChange={handleChange}
            required
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
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="submit"
            value="Save"
            className="form-control btn btn-primary"
            onSubmit={handleSubmit}
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
