import React from "react";//import react

const Header = (props) => {//arrow function declaration ready to take in props
  return (
    // returning one parent element div and inside is whatever we want
    <div>
      {/* creating h1 giving it a style of the object headerStyle that we will make below, also accepting props.title from elsewhere */}
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

const headerStyle = {//declaring header style object with desired styling using camelCase
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;//export to wherever
