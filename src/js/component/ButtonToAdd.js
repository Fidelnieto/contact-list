import React from "react";

const ButtonToAdd = () => {
  return (
    <div className="d-flex justify-content-between mt-2 me-5">
      <h2 className="ms-4">Contact List</h2>
      <a href="/createContact">
        <button className="btn btn-success ">Add new contact</button>
      </a>
    </div>
  );
};

export default ButtonToAdd;
