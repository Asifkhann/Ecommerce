import React from "react";
import { Link } from "react-router-dom";
import { TabPane } from "reactstrap";
import classnames from "classnames";

const SignUp = (props) => {
  const { activeTab, toggle, logintoggle } = props;

  return (
    <TabPane tabId="2">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="texttext"
            className="form-control"
            placeholder="Name"
          ></input>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="form-group">
          <label>Password </label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-group">
          <label>Confirm Password </label>
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
          ></input>
        </div>
        <div className="form-group">
          <Link className="btn btn-primary"  to="">Register</Link>
          <Link className="btn btn-secondary ml-2" onClick={toggle} to="">
            Cancel
          </Link>
        </div>
        <p className="mb-0">
          Already have account?
          <Link
            to="#"
            className={classnames({
              active: activeTab === "1",
            })}
            onClick={() => {
              logintoggle("1");
            }}
          >
            SignIn
          </Link>
          here
        </p>
      </form>
    </TabPane>
  );
};

export default SignUp;
