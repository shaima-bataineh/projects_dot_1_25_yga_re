"use client";

import { useEffect, useState } from "react";

export default function BackTOTop(){
 const [show,setShow] = useState(false);

 useEffect(() => {
    const handlescroll = () => {
        setShow(window.scrollY > 120);
    };
     window.addEventListener("scroll",handlescroll);
     return () => window.removeEventListener("scroll",handlescroll);

 }, []);

 if (!show) return null ;
 return(
    <button onClick={() => window.scrollTo({top: 0 , behavior: "smooth"})}
     
    className="back-to-top">
    <i className="bi bi-arrow-up"></i>
        
    </button>
 );
}