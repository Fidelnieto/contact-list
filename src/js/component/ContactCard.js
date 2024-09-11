import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import ButtonToAdd from "./ButtonToAdd";
import { Context } from "../store/appContext";

const ContactCard = (props) => {

  return (
    <div className="row w-100 container border m-auto mt-1 p-1">
      <div className="col-2">
        <img
          className="img-thumbnail photo mt-2 mb-2"
          src="https://i.pinimg.com/564x/c6/89/95/c68995aa24906a1320b4d7d10aa374b2.jpg"
        />
      </div>
      <div className="info col-8 mt-3 mb-3 d-flex flex-column justify-content-evenly fs-3">
        <span>Mikol Sanido</span> 
        <span>
          <FontAwesomeIcon icon={faLocationDot} size="xs" /> 34 Tipperary Drive
        </span>       
        <span>
          <FontAwesomeIcon icon={faPhone} size="xs" /> 843 2272026
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} size="xs" /> fidelnieto02@gmail.com
        </span>
      </div>
      <div className="edit-delete col-2 mt-2 mb-2">
        <span>
          {" "}
          <button className="btn">
            <FontAwesomeIcon icon={faPencil}  />
          </button>{" "}
          <button className="btn">
            <FontAwesomeIcon icon={faTrash}  />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ContactCard;
