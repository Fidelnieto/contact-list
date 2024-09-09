import React from "react";

const ButtonToAdd = () => {
  return (
    <div className="d-flex justify-content-end mt-2 me-5">
      <a href="/createContact">
        <button className="btn btn-success ">Add new contact</button>
      </a>
    </div>
  );
};

export default ButtonToAdd;
