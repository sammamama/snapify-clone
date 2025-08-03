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

import { languages } from "@/data/languages";

import { useLanguageStore } from "@/state/atom";

const LanguageSelector = () => {
  const { name, setLanguage } = useLanguageStore();
  return (
    <div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className={`w-full bg-neutral-800 p-5 border cursor-pointer`}
            >
              <div className="flex justify-center">{name}</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-sm max-h-56">
            <DropdownMenuLabel>Languages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              key={name}
              value={name}
              onValueChange={(value) => {
                const selectedLanguage = languages.find(
                  (lang) => lang.name === value
                );
                if (selectedLanguage) {
                  setLanguage(selectedLanguage.name);
                }
              }}
            >
              {languages.map((lang) => (
                <DropdownMenuRadioItem key={lang.name} value={lang.name}>
                  {lang.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LanguageSelector;
