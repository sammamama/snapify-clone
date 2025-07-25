"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useBackgroundStore } from "@/state/atom";

const backgrounds = [
  {
    id: "gradient-1",
    name: "Purple Dream",
    class: "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
  },
  {
    id: "gradient-2",
    name: "Ocean Breeze",
    class: "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600",
  },
  {
    id: "gradient-3",
    name: "Sunset Glow",
    class: "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500",
  },
  {
    id: "gradient-4",
    name: "Cosmic Purple",
    class: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  },
];

const CustomBackground = () => {
  const { backgroundId, setBackgroundId, setBackgroundClass } = useBackgroundStore();

  return (
    <div className="w-full">
      <Accordion
        className="max-w-[20rem] p-3 rounded-lg border"
        type="single"
        defaultValue="background-theme"
        collapsible
      >
        <AccordionItem value="background-theme">
          <AccordionTrigger>Background</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <AccordionContent className="m-0 p-0 mt-1">
              Gradients
            </AccordionContent>
            <div className="grid grid-cols-4 gap-3">
              {backgrounds.map((background, i) => (
                <Button
                  key={i}
                  variant={"outline"}
                  onClick={() => {
                    setBackgroundId(background.id)
                    setBackgroundClass(background.class)
                  }}
                  className={`relative text-neutral-200 font-bold col-span-2 flex p-5 py-10
                    justify-between group cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 ${
                      background.id === backgroundId
                        ? "brightness-100"
                        : "brightness-50"
                    } group-hover:brightness-100 transition ${
                      background.class
                    }`}
                  ></div>
                  <span className="z-10 text-neutral-200">
                    {background.name}
                  </span>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CustomBackground;
