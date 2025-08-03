import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { Slider } from "@/components/ui/slider";

import React, { useState, useEffect } from "react";
import { useFontStore } from "@/state/atom";
import { Input } from "./ui/input";

const FontSize = () => {
  const { fontSize, setFontSize } = useFontStore();
  const [inputValue, setInputValue] = useState(fontSize.toString());

  const maxSize = 48;
  const minSize = 8;

  // Sync input value with fontSize when fontSize changes from slider
  useEffect(() => {
    setInputValue(fontSize.toString());
  }, [fontSize]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleInputBlur = () => {
    const numValue = parseInt(inputValue);
    
    // Validate and clamp the value
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(Math.max(numValue, minSize), maxSize);
      setFontSize(clampedValue);
      setInputValue(clampedValue.toString());
    } else {
      // Reset to current fontSize if invalid input
      setInputValue(fontSize.toString());
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle Enter key
    if (e.key === 'Enter') {
      handleInputBlur();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="max-w-[20rem] p-3 rounded-lg border "
        defaultValue={"editor-theme"}
      >
        <AccordionItem value="editor-theme">
          <AccordionTrigger>Font Size</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 ">
            <div className="pt-3 grid grid-cols-12 gap-3">
              <Slider
                className="col-span-9"
                value={[fontSize]}
                max={maxSize}
                min={minSize}
                step={1}
                onValueChange={(value) => {
                  setFontSize(value[0]);
                }}
              />
              <Input
                 className="col-span-2 p-2 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                type="number"
                min={minSize}
                max={maxSize}
              />
            </div>
            <div className="text-xs text-gray-500 text-center">
              Range: {minSize} - {maxSize}px
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FontSize;