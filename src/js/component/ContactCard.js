import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const ContactCard = ({ contact }) => {
  const { state, stateActions } = useContext(Context);
  const navigate = useNavigate();

  const handleOnClick = async (id) => {
    try {
      await fetch(
        `https://playground.4geeks.com/contact/agendas/fidelnieto/contacts/${id}`,
        { method: "DELETE" }
      );

      stateActions({
        type: "remove",
        payload: id,
      });
    } catch (error) {}
  };

  const handleOnClickEdit = async (id) => {
    try {
      const contactToEdit = state.contacts.find((contact) => contact.id === id);
      console.log("Contact to edit:", contactToEdit);
      stateActions({ type: "update", payload: contactToEdit });

      navigate("/edit");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row w-100 container-fluid border m-auto mt-1 p-1">
      <div className="col-2">
        <img
          className="img-thumbnail photo mt-2 mb-2"
          src="https://i.pinimg.com/236x/2f/97/f0/2f97f05b32547f54ef1bdf99cd207c90.jpg"
        />
      </div>
      <div className="info col-8 mt-3 mb-3 d-flex flex-column justify-content-evenly fs-3">
        <span>{contact.name}</span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} size="xs" /> {contact.address}
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} size="xs" /> {contact.phone}
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} size="xs" /> {contact.email}
        </span>
      </div>
      <div className="edit-delete col-2 mt-2 mb-2">
        <span>
          <button className="btn" onClick={() => handleOnClickEdit(contact.id)}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button
            className="btn"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to remove this contact? This could be awful"
                )
              )
                handleOnClick(contact.id);
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
