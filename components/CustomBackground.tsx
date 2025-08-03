"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useBackgroundStore } from "@/state/atom";
import { backgrounds } from "@/data/backgrounds";

const CustomBackground = () => {
  const { name, backgroundId, setBackgroundId, backgroundClass } =
    useBackgroundStore();

  return (
    <div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={`w-full ${backgroundClass} edi border cursor-pointer`}
            >
              <div className={`flex justify-center`}>{name}</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-sm grid grid-cols-2 max-h-56">
            <DropdownMenuLabel className="col-span-2">Backgrounds</DropdownMenuLabel>
            <DropdownMenuSeparator className="col-span-2 bg-neutral-300" />
            <DropdownMenuLabel className={`col-span-2 pt-1`}>Gradients</DropdownMenuLabel>
            {backgrounds.map((bg) => (
              <DropdownMenuRadioGroup
                key={bg.name}
                value={bg.name}
                className={`py-2 m-1 rounded-xl px-1 grid w-full `}
                onValueChange={() => {setBackgroundId(bg.id, bg.name, bg.class)}}
              >
                <DropdownMenuRadioItem style={{}} value={bg.name} className={`col-span-1 relative p-4 text-center group focus:text-neutral-200 
                  text-neutral-900 cursor-pointer z-20 [&>span:first-child]:hidden ${bg.id === backgroundId ? "text-neutral-200" : ""}`}>
                <div className={`${bg.class} w-full h-full absolute inset-0 rounded-md  -z-10 group-hover:opacity-100 
                  ${bg.id === backgroundId ? "opacity-100" : "opacity-50"}`}></div>
                  {bg.name}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CustomBackground;
