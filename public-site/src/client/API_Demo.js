import React from "react";
import "./API_Demo.css";

function API_Demo(props) {
    return (
        <div className="API">
            <div className="API_Demo-header">{props.header}</div>
            <div className="API_Demo-body">{props.body}</div>
        </div>
    )
}
export default API_Demo;