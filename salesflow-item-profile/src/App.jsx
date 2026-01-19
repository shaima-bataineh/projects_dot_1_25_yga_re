// 19-1 Home

import { useState, useEffect } from "react";
import ItemCard from "./Components/ItemCard"; //تعرض بيانات العميل
import Controls from "./Components/Controls"; // تحتوي على ازرار التحكم 
import "./App.css"; // ملف التنسيق
import React from "react";

function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => console.log(data.products)) // عرض المنتجات في Console
      .catch(err => console.log(err));
  }, []);

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
      <h1>Products</h1>
      <ItemCard item={item} setItem={setItem} />

      <Controls
        item={item}
        setItem={setItem}
        newName={newName}
        setNewName={setNewName}
        resetItem={() => setItem(initialItem)}
      />
    </div>
  );
}

export default App;
