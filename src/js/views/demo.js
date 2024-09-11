import React from "react";
import { Link } from "react-router-dom";

import "../../styles/index.css"

export const Demo = () =>{

    return (
        <div className="container">
            <ul className="list-group">

            </ul>
            <br />
            <Link to="/">
                <button className="btn btn-primary"> Back home</button>
            </Link>
        </div>
    )
}