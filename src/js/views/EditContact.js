import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const EditContact = () => {
  const { state, stateActions } = useContext(Context);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (state.contactToEdit) {
      setFormData(state.contactToEdit);
    }
  }, [state.contactToEdit]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        `https://playground.4geeks.com/contact/agendas/fidelnieto/contacts/${formData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      console.log("cambiando");
      stateActions({ type: "update", payload: formData });
      console.log("cambiando2");
      navigate("/");
    } catch (error) {
      console.error("Error al actualizar el contacto", error);
    }
  };

  return (
    <div className="container">
      <h1>
        Hey, you wanna edit <strong>{formData.name}</strong> contact?{" "}
      </h1>

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
            value={formData.name}
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
            value={formData.email}
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
            value={formData.phone}
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
            value={formData.address}
            onChange={handleChange}
            required
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

      <a href="/"> Back to homepage</a>
    </div>
  );
};

export default EditContact;
