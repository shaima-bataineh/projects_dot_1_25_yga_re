
import { useState, useEffect } from "react";

function ItemCard({ item, setItem}) { // appلعرض بيانات العميل لازم يكون اول حرف فيه كابيتل يستخدم الايتم يلي جاي من الcomponent ItemCard 
   const [isEditing, setIsEditing] =useState(false);
   const [tempName, setTempName] = useState(item.name);
  
   useEffect(() => {
    setTempName(item.name);
  }, [item.name]);

  return(
        <div className="card" >
            <h2> Client Profile</h2>

           <p> 
            <strong> Client Name:</strong>{""} 
           {isEditing ? (
            <>
            <input type="text"
             value={tempName}
             onChange={(e) => setTempName(e.target.value)}
            />

            <button onClick={() => {
              if (tempName.trim()!==""){
              setItem({...item, name: tempName});
              setIsEditing(false);
            }
          }}
            >
              Save
            </button>
            </>
           ) :(
            <>
            {item.name}
            <button  onClick={()=> setIsEditing(true)}>
              Edit
            </button>
            </>
           )}
           </p>
           
          <p className="deals"><strong> Deals Count:</strong> {item.deals}</p>
           
       <p className="industry"><strong>Industry:</strong> {item.industry || "__"}
       
       </p>
</div>

    );

}

export default ItemCard;