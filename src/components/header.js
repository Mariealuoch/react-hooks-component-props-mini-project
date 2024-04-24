import React from "react";
import blogData from "../data/blog";

function Header(props){
    return (
        <div>
        <h1>{props.name}</h1>
        </div>
    )
}
export default Header;