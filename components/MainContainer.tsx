"use client";
import React, { Suspense } from "react";
import Header from "./Header";
import state from "@/store/store";
import { useSnapshot } from "valtio";
function MainContainer({ children }: { children: React.ReactNode }) {
  const snap = useSnapshot(state);
  return (
    <Suspense
      fallback={
        <main className="h-screen w-screen flex justify-center items-center">
          <div className="loader"></div>
        </main>
      }
    >
      <main className="p-3 md:p-6 flex  h-screen">
        <div
          className="container-bg flex flex-col mx-auto rounded-3xl flex-1 w-full"
          style={{
            backgroundImage: `
    radial-gradient(
      circle,
      white 10%,
      color-mix(in srgb, ${
        ["#F5F5F5", "#FFFFFF", "#EDE6D6"].includes(snap.color)
          ? "#B0B0B0"
          : snap.color
      } 40%, white) 75%,
      color-mix(in srgb, ${
        ["#F5F5F5", "#FFFFFF", "#EDE6D6"].includes(snap.color)
          ? "#B0B0B0"
          : snap.color
      } 90%, black) 120%
    )
  `,
          }}
        >
          <Header />
          <div
            className="flex-1 flex flex-col w-full overflow-auto"
            id="scrollbar"
          >
            {children}
          </div>
        </div>
        <svg
          className="hidden"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <filter id="fancy-goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="9"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </main>
    </Suspense>
  );
}

export default MainContainer;
