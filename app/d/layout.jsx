"use client";

import React, { useRef } from "react";
import Canva from "@/components/Canva";

export default function Layout({ children }) {
  return (
    <div className="flex relative">
      <div className="flex-1">{children}</div>
      <div className="w-2/5 h-[80vh] sticky top-0">
       <Canva position={[0, 0, 0]} rotation={false} fov={20} element="root" />
      </div>
    </div>
  );
}
