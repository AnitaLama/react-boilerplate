import React from "react";
import { Field } from "redux-form";

export const renderTextField = ({
  input,
  label,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
  <div className="float-left">
    <Field
      name={label}
      component="input"
      type={type}
      style={{ color: "black", width: 220 }}
      className="inputBox"
      placeholder={placeholder}
    />
    <br />
    {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
  </div>
);

export const renderField = ({
  input,
  label,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
  <div className="float-left">
    <Field
      name={label}
      component="input"
      type={type}
      style={{ color: "black", width: 220 }}
      className="inputBox"
      placeholder={placeholder}
    />
    <br />
    {touched && (error && <span className="error">{error}</span>)}
  </div>
);

export const renderChequeField = ({
  input,
  label,
  type,
  name,
  placeholder,
  meta: { touched, error }
}) => (
  <div className="float-left">
    <Field
      name={label}
      component="input"
      type={type}
      style={{ width: "100%" }}
      placeholder={placeholder}
    />
    <br />
    {touched && (error && <span style={{ color: "red" }}>{error}</span>)}
  </div>
);
