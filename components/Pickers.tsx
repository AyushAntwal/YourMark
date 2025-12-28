"use client";
import React from "react";
import Card from "./Card";
import state from "@/store/store";
import { useSnapshot } from "valtio";

function ColorPicker() {
  useSnapshot(state);
  return (
    <Card>
      <div className="grid grid-cols-3 overflow-auto gap-3 mx-2 p-3 h-[70dvh] my-1">
        {state.colors.map((color) => (
          <button
            key={color.color}
            title={color.label}
            className={`w-[40px] bg-white h-[40px] rounded-md  hover:scale-110`}
            style={{
              backgroundColor: color.color,
              border: color.color === state.color ? "3px solid white" : "none",
            }}
            onClick={() => {
              state.color = color.color;
            }}
          ></button>
        ))}
      </div>
    </Card>
  );
}

function ImagePickers() {
  useSnapshot(state);
  return (
    <div className="flex gap-6 mx-2 my-4">
      {state.decals.map((decal) => (
        <div className=" cursor-pointer">
          <img
            key={decal}
            src={`/images/${decal}.png`}
            alt={decal}
            className="h-[50px]"
            onClick={() => {
              state.decal = decal;
              state.image = "";
            }}
          />
        </div>
      ))}
      <button
        className="h-[50px] w-[50px] border flex justify-center items-center bg-slate-300 rounded-full border-y-gray-700 border-x-gray-100"
        onClick={() => {
          document.getElementById("imageUpload")?.click();
        }}
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <input
        type="file"
        id="imageUpload"
        style={{ display: "none" }}
        accept=".png, .jpg"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file);
            state.image = url;
          }
        }}
      />
    </div>
  );
}

function ImagePosition() {
  const snap = useSnapshot(state);

  return (
    <div
      className="flex gap-2 flex-col mx-2 my-4"
      role="group"
      aria-label="Design position"
    >
      {snap.positions.map((position) => {
        const isActive = position.position?.join() === snap.position?.join();

        return (
          <button
            type="button"
            key={position.name}
            aria-pressed={isActive}
            disabled={isActive}
            onClick={() => (state.position = position.position as any)}
            className={`
              relative flex items-center gap-1.5
              px-3 py-2 rounded-xl
              text-[11px] font-semibold uppercase
              transition-all duration-200
              border
              ${
                isActive
                  ? "bg-black text-white border-black cursor-default"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }
            `}
          >
            {/* Active indicator */}
            <span
              className={`
                h-1.5 w-1.5 rounded-full
                ${isActive ? "bg-white" : "bg-gray-400"}
              `}
            />

            {position.name}
          </button>
        );
      })}
    </div>
  );
}

function SizeSlider() {
  const snap = useSnapshot(state);

  const MIN = 1000;
  const MAX = 7000;

  // Reverse percentage
  const percentage = Math.round(((MAX - snap.scale) / (MAX - MIN)) * 100);

  return (
    <div className="w-56 mx-2 my-4 space-y-2">
      {/* Label */}
      <div className="flex justify-between text-xs font-semibold text-black">
        <span>Print Size</span>
        <span className="text-gray-800">{percentage}%</span>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={MIN}
        max={MAX}
        value={MAX - snap.scale + MIN}
        onChange={(e) => {
          state.scale = MAX - Number(e.target.value) + MIN;
        }}
        className="
          w-full appearance-none h-1 rounded-full
          bg-gradient-to-r from-gray-500 to-gray-900
          focus:outline-none cursor-pointer
        "
      />

      {/* Size hint */}
      <div className="flex justify-between text-xs font-medium text-gray-800">
        <span>Small</span>
        <span>Large</span>
      </div>
    </div>
  );
}

export { ColorPicker, ImagePickers, ImagePosition, SizeSlider };
