
//i made this to not use the studio my website layout just for seprate layout
// app/studio/[[...tool]]/layout.tsx

"use client";


import '../../../globals-studio.css';



export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

  