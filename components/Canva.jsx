"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Center, Environment } from "@react-three/drei";
import { CameraRig, Backdrop, Shirt } from "./CameraRig";

function Canva({ position = [0, 0, 0], fov = 20, element, rotation = true }) {
  const [rootElement, setRootElement] =
    (useState < HTMLElement) | (null > null);

  useEffect(() => {
    if (element) {
      setRootElement(document.getElementById(element));
    }
  }, [element]);
  
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span class="loader"></span>
        </div>
      }
    >
      <Canvas
        shadows
        camera={{ position, fov }}
        gl={{ preserveDrawingBuffer: true }}
        eventSource={rootElement ?? undefined}
        eventPrefix="client"
      >
        <ambientLight intensity={0.5} />
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
        <CameraRig rotation={rotation}>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </Suspense>
  );
}

export default Canva;
