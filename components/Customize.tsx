"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { useThemeStore } from "@/state/atom";

const themes = [
  {
    id: "light",
    name: "Light",
    preview: "bg-white border-gray-200",
    textColor: "text-gray-900",
  },
  {
    id: "dark",
    name: "Dark",
    preview: "bg-gray-900 border-gray-700",
    textColor: "text-gray-100",
  },
  {
    id: "glass",
    name: "Glass Light",
    preview: "bg-white/20 backdrop-blur border-white/30",
    textColor: "text-gray-900",
  },
  {
    id: "glass-dark",
    name: "Glass Dark",
    preview: "bg-black/20 backdrop-blur border-white/20",
    textColor: "text-gray-100",
  },
];

const Customize = () => {
  const {themeId, setThemeId} = useThemeStore();

  return (
    <div className="w-full my-5">
      <div className="">
        <Accordion
          type="single"
          collapsible
          className="max-w-[20rem] p-3 rounded-lg border "
          defaultValue={"editor-theme"}
        >
          <AccordionItem value="editor-theme">
            <AccordionTrigger>Editor Theme</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 ">
              <div className="grid grid-cols-4 gap-3">
                {themes.map((theme, i) => (
                  <Button
                    key={i}
                    variant={"outline"}
                    onClick={() => setThemeId(theme.id)}
                    className={` col-span-2 flex 
                    justify-between text-neutral-300 hover:bg-accent hover:text-neutral-900 cursor-pointer ${
                      theme.id === themeId
                        ? "bg-accent text-neutral-900"
                        : "bg-neutral-800"
                    } `}
                  >
                    <div className={`w-4 h-4 border-2 ${theme.preview}`}></div>
                    {theme.name}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Customize;
