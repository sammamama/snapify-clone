"use client";

import React, { useEffect, useState } from "react";

import CodeMirror, { EditorView, lineNumbers } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { autocompletion } from "@codemirror/autocomplete";

import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { useBackgroundStore, useThemeStore } from "@/state/atom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const CodeEditor = () => {
  const { backgroundClass } = useBackgroundStore();
  const { themeId } = useThemeStore();

  const [language, setLanguage]= useState('js');

  type ThemeStyleType = {
    backgroundColor: string;
    color: string;
    gutterBgColor: string;
    gutterFgColor: string;
  };

  var themeStyle: ThemeStyleType = {
    backgroundColor: "white",
    color: "black",
    gutterBgColor: "white",
    gutterFgColor: "black",
  };

  switch (themeId) {
    case "light":
      themeStyle = {
        backgroundColor: "#f5f7fa", // soft light gray
        color: "#2d2d2d", // dark gray text
        gutterBgColor: "#f0f0f0", // lighter gutter
        gutterFgColor: "#999999", // soft gray
      };
      break;

    case "dark":
      themeStyle = {
        backgroundColor: "#1e1e1e", // classic VS Code dark
        color: "#d4d4d4", // typical light gray text
        gutterBgColor: "#252526", // VS Code dark gutter
        gutterFgColor: "#858585", // muted gray
      };
      break;

    case "glass":
      themeStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.6)", // subtle transparency
        color: "black", // darker text for clarity
        gutterBgColor: "rgba(255, 255, 255, 0.1)",
        gutterFgColor: "#666666",
      };
      break;

    case "glass-dark":
      themeStyle = {
        backgroundColor: "rgba(30, 30, 30, 0.6)",
        color: "#eeeeee", // bright against dark
        gutterBgColor: "rgba(30, 30, 30, 0.4)",
        gutterFgColor: "#aaaaaa",
      };
      break;
  }

  const value = "asdasdsad";

  const extensions = [
    javascript({ jsx: true }),
    lineNumbers(),
    autocompletion(),
    syntaxHighlighting(defaultHighlightStyle),
  ];

  const customTheme = EditorView.theme({
    "&": {
      height: "100%",
      backgroundColor: themeStyle.backgroundColor,
      color: themeStyle.color,
      border: "none",
      "border-shadow": "none",
      "border-radius": "0px 0px 0.75rem 0.75rem",
    },
    ".cm-gutters": {
      color: themeStyle.gutterFgColor,
      backgroundColor: themeStyle.gutterBgColor,
      border: "none",
    },
  });

  return (
    <div>
      <div className={`h-[100%] ${backgroundClass} px-20 py-10`}>
        <div className="rounded-xl pb-3 min-h-[500px]">
          <div
            className="relative top-0 rounded-t-xl left-0 flex items-center justify-between
            w-full h-10 bg-neutral-800/70 backdrop-blur-2xl z-10"
          >
            <div className="flex">
              <div className="h-3 w-3 rounded-full bg-green-400 ml-4"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400 ml-2"></div>
              <div className="h-3 w-3 rounded-full bg-red-400 ml-2"></div>
            </div>
            <div className="px-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className={`h-6 border p-3 outline-0 bg-[${themeStyle.color}] text-[${themeStyle.backgroundColor}] `} variant="secondary">{language}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={language}
                    onValueChange={setLanguage}
                  >
                    <DropdownMenuRadioItem value="js">
                      Javascript (JSX/TSX)
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="py">
                      Python
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="cpp">
                      CPP
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <CodeMirror
            theme={customTheme}
            value={value}
            minHeight="500px"
            className="text-red-900  rounded-lg outline-none border-none shadow-none focus:outline-none
             focus:border-none min-h-[500px]"
            extensions={extensions}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
