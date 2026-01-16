import React from "react";
import { FaDollarSign, FaUsers, FaTasks, FaChartLine } from "react-icons/fa";

const iconsMap = {
  sales: <FaDollarSign />,
  customers: <FaUsers />,
  tasks: <FaTasks />,
  performance: <FaChartLine />
};
const Card = ({title, value, status, type }) => {
 return (
    <div className={`card ${status.toLowerCase()}`}>
      <div className="card-icon">{iconsMap[type]}</div>
      <h3>{title}</h3>
      <p>{value}</p>
      <span className={`status ${status.toLowerCase()}`}>
  {status}
</span>

    </div>
  );
};

export default Card;
