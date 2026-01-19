// for button 
 // ...item copy all of client data

function Controls({ item, setItem, resetItem, newName,setNewName }){
    return (
        <div className="controls">
            <button onClick={() => setItem({...item, deals: item.deals +1})}> 
                Increase Deals
            </button>
     
     <button onClick={() => setItem({...item,deals: item.deals -1})
     }>
        Decrease Deals
     </button>



            <button onClick={resetItem}>
                Reset Profile
            </button>
        </div>
    );
}
 export default Controls;


 //onClick={() => {
         // const newName = prompt("Enter new client name:");
          //if (newName) {
          //  setItem({ ...item, name: newName });
        //  }
       // }}