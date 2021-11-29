import React from "react";

const RightMessage = ({ user }) => {
  let { id, name, email, status, gender } = user;

  return (
    <div>
      <div className="message i">
        <div className="msgBody">
          <p className="sub-text">
            <span className="text-title">Name:</span>
            {name}
          </p>
          <p className="sub-text">
            <span className="text-title">Email:</span>
            {email}
          </p>
          <p className="sub-text">
            <span className="text-title">Gender:</span>
            {gender}
          </p>
          <p className="sub-text">
            <span className="text-title">Status:</span>
            {status == undefined ? null : status}
          </p>
        </div>
        <div className="msgHead" style={{ marginLeft: 10 }}>
          {id}
        </div>
      </div>
    </div>
  );
};

export default RightMessage;
