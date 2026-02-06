import React from "react";

export const metadata = {
  title:'Session 23 - Next.js API Route',
  description:'Next.js API Route',
  keywords: 'T-shirt, dress, bag, Kabupaten , Negara'
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
  
}){
  return(
    <html lang="en">
      <body style={{fontFamily:"system-ui", padding:20}}>
        {children}
      </body>
    </html>
  );
}