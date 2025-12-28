'use client'
import React, { useRef } from "react";
import dynamic from "next/dynamic";
const Canvas = dynamic(() => import("@/components/Canva"), { ssr: false });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative">
      <div className="flex-1">{children}</div>
      <div className="w-2/5 h-[80vh] sticky top-0">
        <Canvas position={[0, 0, 0]} rotation={false} fov={20} element="root" />
      </div>
    </div>
  );
}
