import React from "react";
import ContactCard from "../component/ContactCard";
import ButtonToAdd from "../component/ButtonToAdd";

const Contact = () => {
  return (
    <div>
      <ButtonToAdd />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
};

export default Contact;
