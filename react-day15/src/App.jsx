import React from "react"
import Header from "./Header"
import Card from "./Card"
import "./App.css"


function App() {

  const cardData =[
    {title:"Today Sales" , value:"15,000$",status: "Success"},
    {title: "العملاء الجدد", value: "25", status: "Info"},
    {title: "المهام المتأخرة", value: "3", status: "Warning"},
    {title: "الأداء الشهري", value: "85%", status: "Success" }
  ];

  return (
    <div className="app">
      <Header title="SalesFlow Dashboard" subtitle="Sales, Customer and Performance Management"/>
       <div className="cards-container">
       {cardData.map((card,index) => (
        <Card 
        key={index}
        title={card.title}
        value={card.value}
        status={card.status}
        />
        ))}
       </div>
    </div>
  );
};
export default App;
