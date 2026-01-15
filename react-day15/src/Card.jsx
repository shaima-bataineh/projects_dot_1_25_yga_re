import React from "react";

const Card = ({title, value, status }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
      {status && <span className={`status ${status.toLowerCase()}`}>{status}</span>}
      </div>
  );
};

export default Card;
