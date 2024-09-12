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
  const { stateActions } = useContext(Context);
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

  const handleOnClickEdit = async () => {
    try {
      navigate("/edit");
    } catch (error) {}
  };

  return (
    <div className="row w-100 container-fluid border m-auto mt-1 p-1">
      <div className="col-2">
        <img
          className="img-thumbnail photo mt-2 mb-2"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
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
          <button className="btn" onClick={() => handleOnClickEdit()}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="btn" onClick={() => handleOnClick(contact.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
