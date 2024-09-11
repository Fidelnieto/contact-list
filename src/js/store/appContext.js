import React, { useReducer } from "react";

const initialContext = {
	name: "",
	email: "",
	phone: "",
	address: ""
}

export const Context = React.createContext(initialContext);


export const Reducer = (state, action) => {

   switch (action.type) {
	  case "add":
		return {...state, ...action.payload};
	  case "remove":
		let newState=[...state]
		delete newState(action.payload)
		return newState
	  default:
		return state;
	}
  };

export const Provider = ({ children }) => {
	const [state, stateActions ]= useReducer(Reducer, initialContext);
		
		return (
			<Context.Provider value={{state, stateActions}}>
				{ children }
			</Context.Provider>
		);


};

