import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spin />
      {` `}Loading...
    </div>
  );
};

export default LoadingSpinner;
