import React, { useReducer } from "react";

const initialContext = {
  contacts: [],
  contactToEdit: null,
};

export const Context = React.createContext(initialContext);

export const Reducer = (state, action) => {
  switch (action.type) {
    case "setContacts":
      return { ...state, contacts: action.payload.contacts };

    case "add":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "remove":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "update":
      return {
        ...state,
        contactToEdit: action.payload,
      };

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, stateActions] = useReducer(Reducer, initialContext);

  return (
    <Context.Provider value={{ state, stateActions }}>
      {children}
    </Context.Provider>
  );
};
