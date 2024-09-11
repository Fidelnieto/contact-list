import React, { useEffect, useState, useContext} from "react";
import PropTypes  from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
    const params = useParams();
    return (
        <div className="jumbotron">
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    )
}

Single.PropTypes ={
    match: PropTypes.object
}