import React from "react";
const NotFound = (props) => {
  return (
    <div>
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle">Page Not Found</i>
      </h1>
      <p className="large">Sorry. This page does not exist.</p>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
