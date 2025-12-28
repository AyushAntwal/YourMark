'use client'
import React, { useRef } from "react";
import { motion } from "framer-motion";
function Card({children}: {children: React.ReactNode}) {
  return (
    <motion.div id="CanvasCard" className="bg-[#313030b0] overflow-hidden shadow-xl mx-2 my-2 border-1 border rounded-xl ">
      {children}
    </motion.div>
  );
}

export default Card;
