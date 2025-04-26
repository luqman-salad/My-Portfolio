// 'use client'

// import { usePathname } from "next/navigation";
// import Head from "@/components/Head";
// import Footer from "@/components/Footer";

// export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const isStudioRoute = pathname.startsWith("/studio");

//   return (
//     <>
//       {!isStudioRoute && (
//         <header className="fixed top-0 left-0 w-full z-50">
//           <Head />
//         </header>
//       )}
//       <main className={`max-w-3xl m-auto ${isStudioRoute ? 'mt-0' : 'mt-[80px]'}`}>
//         {children}
//       </main>
//       {!isStudioRoute && <Footer />}
//     </>
//   );
// }
