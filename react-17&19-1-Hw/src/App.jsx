// 19-1 H.w Mon

import { useState, useEffect } from "react";
import ItemCard from "./Components/ItemCard"; //تعرض بيانات العميل
import Controls from "./Components/Controls"; // تحتوي على ازرار التحكم 
import "./App.css"; // ملف التنسيق
import Orders from "./Components/Orders";
import React from "react";

function App() {

  // الحالة الابتدائية
  const initialItem = {
    name: "Shaimaa Jamal",
    deals: 0,
    industry: "Marketing",
  };

  const [item, setItem] = useState(initialItem);
  const [newName, setNewName] = useState("");

  return (
    <div className="app">
      <h1>SalesFlow-Item Profile</h1>

      <div className="layout">
        <div className="left">
          <ItemCard item={item} setItem={setItem} />
          <Controls
            item={item}
            setItem={setItem}
            newName={newName}
            setNewName={setNewName}
            resetItem={() => setItem(initialItem)}
          />
        </div>

        <div className="right">
          <Orders />
        </div>
      </div>
    </div>
  );
}
export default App;