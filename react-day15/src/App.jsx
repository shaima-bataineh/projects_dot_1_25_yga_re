
import { useState } from "react";
import Header from "./Header"
import Card from "./Card"
import "./App.css"

function App() {
 
  const [dark, setDark] = useState(false);
  const cardData =[
    {title:"Today Sales" , value:"15,000$",status: "Success", type: "sales"},
    {title: "New customers", value: "25", status: "Info", type: "customers" },
    {title: "Overdue assignments", value: "3", status: "Warning", type: "tasks"},
    {title: "Monthly performance", value: "85%", status: "Success", type: "performance"}
  ];


  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <button className="dark-btn" onClick={() => setDark(!dark)}>
        {dark ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </button>

      <Header title="SalesFlow Dashboard" 
      subtitle="Sales, Customer and Performance Management"/>

       <div className="cards-container">
       {cardData.map((card,index) => (
        <Card 
        key={index}
        title={card.title}
        value={card.value}
        status={card.status}
        type={card.type}
        />
        ))}
       </div>
    </div>
  );
}
export default App;
