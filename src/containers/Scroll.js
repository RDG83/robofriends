import React from "react";

const Scroll = props => {
    return (
        <div
            style={{
                overflow: "scroll",
                border: "2px solid black",
                height: "82vh"
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
