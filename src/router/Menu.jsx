import {Link} from "react-router-dom";
import React from "react";

export function Menu() {
    return <>
        <Link to="/">go to list page</Link>
        <Link to="/done">go to done page</Link>
    </>;
}