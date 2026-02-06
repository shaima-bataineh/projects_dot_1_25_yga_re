//import { title } from "process"; {/* this a (global object) just use in server not related in metadata */} 1
import {CartProvider} from "./CartContext";
import React from "react";

export const metadata ={
  title: "next architecture demo",//this title of page not relate to process.title ❌
};

export default function RootLayout({ children, // error was you try to make Type to children inside (destructuring) but this not allowed --right define the type of prop not children alone
  }:
{
  children:React.ReactNode;
}){
  return(
    <html lang="en">
      
      <body style={{fontFamily:"arial, sans-serif",padding:20}}> {/* add space between error on charcter o arial,sans-serif  3 */}
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
