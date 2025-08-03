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

import { themes } from "@/data/themes";

const Customize = () => {
  const { themeId, setThemeId } = useThemeStore();

  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="max-w-[20rem] min-w-[16rem] p-3 rounded-lg border "
        defaultValue={"editor-theme"}
      >
        <AccordionItem value="editor-theme">
          <AccordionTrigger>Editor Theme</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <div className="grid grid-cols-4 gap-3">
              {themes.map((theme, i) => (
                <Button
                  key={i}
                  onClick={() =>
                    setThemeId(theme.id, theme.classname, theme.themeHref)
                  }
                  className={` col-span-2 flex
                      justify-between text-neutral-300 hover:bg-accent hover:text-neutral-900 cursor-pointer ${
                        theme.id === themeId
                          ? "bg-neutral-100 text-neutral-900"
                          : "bg-neutral-800"
                      } `}
                >
                  <div className={`w-4 h-4 border-2 ${theme.classname}`}></div>
                  {theme.name}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Customize;
