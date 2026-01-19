import { useState } from "react";
import ItemCard from "./components/ItemCard";//تعرض بيانات العميل
import Controls from "./components/Controls";// تحتوي على ازرار التحكم 
import "./App.css";// ملف التنسيق


function App() {

  // الحالة الابتدائية
    const initialItem = {
    name: "Shaimaa Jamal",
    deals:0,
    industry:" Marketing" ,   
    };

     const [item , setItem] = useState(initialItem);// item هي دالة لتغيرsetItem 
     const [newName, setNewName] = useState("");


 return (
    <div className="app">
        <h1>SalesFlow-Item Profile</h1>
         <ItemCard item={item} setItem={setItem}  />

         <Controls
         item={item}
         setItem={setItem}
         newName={newName}
         setNewName={setNewName}
         resetItem={() => setItem(initialItem)} // دالة لارجاع العنصر للبدايةresetitem

         />

    </div>
 );
}
export default App;