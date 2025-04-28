
//i made this to not use the studio my website layout just for seprate layout
// app/studio/[[...tool]]/layout.tsx

"use client";

import { useEffect } from 'react';
import '../../../globals-studio.css';



export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  useEffect(() => {
    const headerElement = document.getElementsByTagName("header");
    const FooterElement = document.getElementsByTagName("footer");


    FooterElement[0].style.display = "none";
    headerElement[0].style.display = "none";

    
  }, []);






  return (
    <html lang="en">
      <body className='min-w-screen'>{children}</body>
    </html>
  )
}

  