import React, { useContext, useEffect } from "react";
import ContactCard from "../component/ContactCard";
import ButtonToAdd from "../component/ButtonToAdd";
import { Context } from "../store/appContext";

const Contact = () => {
  const { state, stateActions } = useContext(Context);

  const fetchForContacts = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/contact/agendas/fidelnieto/contacts"
      );

      const translatedResponse = await response.json();
      console.log(translatedResponse);

      stateActions({
        type: "setContacts",
        payload: translatedResponse,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchForContacts();
  }, []);

  return (
    <div>
      <ButtonToAdd />
      {state.contacts && state.contacts.length > 0 ? (
        state.contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))
      ) : (
        <p className="text-center mt-5">No contacts available.</p>
      )}
    </div>
  );
};

export default Contact;
