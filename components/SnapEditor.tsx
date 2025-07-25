import React from "react";

import Customize from "./Customize";
import CustomBackground from "./CustomBackground";
import CodeEditor from "./CodeEditor";

const SnapEditor = () => {
  return (
    <div className="max-w-[80%] mx-auto min-h-screen w-full bg-neutral-900">
      <div className="grid grid-cols-12 py-10 mx-10">
        <div className="col-span-12 text-center font-semibold text-5xl mb-3">Snapifi</div>
        <div className="col-span-4  bg-neutral-800 h-full p-5 mx-5">
          <Customize />
          <CustomBackground />
        </div>
        <div className="col-span-8">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default SnapEditor;
