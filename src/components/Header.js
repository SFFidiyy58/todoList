import React from "react";

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Dancuk Lu !!!</h1>
        </header>
    );
}

const headerStyle = {
    background: "#333",
    color: "3fe",
    textAlign: "center",
    padding: "10px"
};

export default Header;