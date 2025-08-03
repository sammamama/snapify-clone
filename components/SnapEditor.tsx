import React, { useRef } from "react";

import Customize from "./Customize";
import CustomBackground from "./CustomBackground";
import CodeEditor from "./CodeEditor";
import LanguageSelector from "./LanguageSelector";
import { Separator } from "./ui/separator";
import FontSize from "./FontSize";
import Export from "./ui/Export";
import { useLanguageStore } from "@/state/atom";

const SnapEditor = () => {
  const snippetRef = useRef(null);

  const {code} = useLanguageStore();

  return (
    <div className="lg:max-w-[80%] mx-auto min-h-screen w-full bg-neutral-900">
      <div className="grid grid-cols-12 place-items-center xl:place-items-start py-10 mx-10">
        <div className="col-span-12 text-center w-full font-semibold text-5xl mb-3">
          Snapifi
        </div>
        <div className="col-span-12 xl:col-span-4 bg-neutral-800 h-full p-5 mx-5">
          <div className="max-w-[20rem] grid gap-y-4">
            <Customize />
            <CustomBackground />
            <LanguageSelector />

            <Separator className="my-5" />

            <FontSize />

            <Separator className="my-5" />

            <Export snippetRef={snippetRef} snippetText={code} />
          </div>
        </div>
        <div className="xl:col-span-8 col-span-12">
          <CodeEditor snippetRef={snippetRef}/>
        </div>
      </div>
    </div>
  );
};

export default SnapEditor;
