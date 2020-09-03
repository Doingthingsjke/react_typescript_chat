import React from "react";

export const Signup: React.FunctionComponent = () => {
  return (
    <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
          <label>First Name</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label>Last Name</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label>Password</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label>Email</label>
          <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
    </form>
  </div>
  );
};