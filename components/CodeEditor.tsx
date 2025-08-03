"use client";

import Editor from "react-simple-code-editor";

import {
  useBackgroundStore,
  useFontStore,
  useLanguageStore,
  useThemeStore,
} from "@/state/atom";

import hljs from "highlight.js";

const CodeEditor = ({snippetRef}) => {
  const { backgroundClass } = useBackgroundStore();
  const { themeId, classname } = useThemeStore();
  const { name, code, placeholder, setCode } = useLanguageStore();
  const {fontSize} = useFontStore();

  return (
    <div>
      <div ref={snippetRef} className={`h-[100%] lg:min-w-[700px] w-fit max-w-full ${backgroundClass} px-20 py-10`}>
        <div className="rounded-xl pb-3">
          <div
            className="relative top-0 rounded-t-xl left-0 flex items-center justify-between
            w-full h-10 bg-neutral-800/70 backdrop-blur-2xl z-10"
          >
            <div className="flex">
              <div className="h-3 w-3 rounded-full bg-green-400 ml-4"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400 ml-2"></div>
              <div className="h-3 w-3 rounded-full bg-red-400 ml-2"></div>
            </div>
          </div>
          <div
            className={`${classname} rounded-b-lg ${
              themeId.includes("dark") ? "text-neutral-200" : "text-neutral-900"
            } font-light px-10 py-5`}
          >
            <Editor
              value={code || ""}
              placeholder={placeholder}
              onValueChange={(newCode) => {
                setCode(newCode);
              }}
              className={`min-h-[200px]`}
              highlight={(code) =>
                hljs.highlight(code, { language: name || "plaintext" }).value
              }
              style={{ fontSize: fontSize }}
              textareaClassName="focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
