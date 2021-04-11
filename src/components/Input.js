import React from "react";
import "../scss/components/_input.scss";

function Input({ handleChange, label, shrink, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length || shrink ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default Input;
