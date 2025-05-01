"use client";

import { useToC } from "@/app/content/ToCContext";
import Link from "next/link";
import { FaFacebookSquare,FaLinkedin  } from "react-icons/fa";
import { FaXTwitter,FaSquareReddit  } from "react-icons/fa6";




export default function LeftSidebar() {
  const { toc } = useToC();

  return (
    <div className="fixed">
      <aside className=" p-4 top-20 max-h-[410px] overflow-y-scroll hidden lg:block">
        <h2 className="text-xl font-semibold mb-4">Contents</h2>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.id} className={`ml-${item.level * 2}`.trim()}>
              <a href={`#${item.id}`} className="text-sm text-gray-700 hover:text-cyan-600">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <div>
        <h1 className="mt-5 text-2xl">Share:</h1>
        <div className="flex text-2xl text-gray-600 mt-5 gap-x-3">
          <Link href='/'>
            <FaFacebookSquare/>
          </Link>
          <Link href='/'>
            <FaXTwitter/>
          </Link>
          <Link href='/'>
            <FaLinkedin/>
          </Link>
          <Link href='/'>
            <FaSquareReddit/>
          </Link>
        </div>
      </div>
    </div>
  );
}