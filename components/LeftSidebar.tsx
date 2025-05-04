"use client";
import { useToC } from "@/app/content/ToCContext";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareReddit, FaXTwitter } from "react-icons/fa6";

export default function LeftSidebar() {
  const { toc } = useToC();

  // Deduplicate entries based on id
  const uniqueToC = Array.from(new Map(toc.map(item => [item.id, item])).values());

  return (
    <div className="fixed">
      <div className=" p-4 top-20 max-h-[350px] overflow-y-scroll hidden lg:block">
      <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2 ml-5">
        {uniqueToC.map((item) => (
          <li key={item.id} className={`ml-${item.level * 2}`}>
            <a href={`#${item.id}`} className="text-sm text-gray-700 hover:text-cyan-600">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      </div>

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
