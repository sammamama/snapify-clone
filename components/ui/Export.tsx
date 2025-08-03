import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import React from "react";
import { Button } from "./button";
import { Download, Share2 } from "lucide-react";

import { toPng} from 'html-to-image'
import { toast } from "sonner";

const Export = ({ snippetRef, snippetText = "" }) => {
  const downloadAsImage = async () => {
    if (!snippetRef?.current) return;

    try {
        toast.info("Downloading data...")
        const imgUrl = await toPng(snippetRef.current, {pixelRatio: 2})

        const link = document.createElement('a')
        link.href = imgUrl;
        link.download = `snapifi-${Date.now()}.png`
        link.click();

        toast.success("Download as PNG sucessful")

    } catch (error) {
      console.error("Failed to download image:", error);
      // Fallback: copy text to clipboard
      await navigator.clipboard.writeText(snippetText);
      toast.error("Image download failed. Code copied to clipboard instead!");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(snippetText);
      toast.success("Copied to clipboard")
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="max-w-[20rem] p-3 rounded-lg border"
        defaultValue={"export-options"}
      >
        <AccordionItem value="export-options">
          <AccordionTrigger>Export & Share</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-3">
            <div className="pt-3 space-y-3">
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={downloadAsImage}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Export;
