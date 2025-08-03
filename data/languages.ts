import { languageType } from "@/types/theme";

export const languages: languageType[] = [
  {
    name: "javascript",
    placeholder: `//The ultimate productivity app

function doNothing() {
  console.log("Shhh... I'm being productive...");
}

setInterval(doNothing, 1000);
  `,
  },
  {
    name: "python",
    placeholder: `# The ultimate productivity app

function doNothing():
  print("Shhh... I'm being productive...")


doNothing()
  `,
  },
  {
    name: "c++",
    placeholder: `#include <iostream>
#include <thread>
#include <chrono>

void doNothing() {
    std::cout << "Shhh... I'm being productive..." << std::endl;
}

int main() {
    while (true) {
        doNothing();
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
    return 0;
}`,
  },
  { name: "bash", placeholder: "" },
  { name: "c", placeholder: "" },
  { name: "c#", placeholder: "" },
  { name: "clojure", placeholder: "" },
  { name: "crystal", placeholder: "" },
  { name: "css", placeholder: "" },
  { name: "diff", placeholder: "" },
  { name: "dockerfile", placeholder: "" },
  { name: "elm", placeholder: "" },
  { name: "elixir", placeholder: "" },
  { name: "erlang", placeholder: "" },
  { name: "graphql", placeholder: "" },
  { name: "go", placeholder: "" },
  { name: "haskell", placeholder: "" },
  { name: "html", placeholder: "" },
  { name: "java", placeholder: "" },
  { name: "json", placeholder: "" },
  { name: "kotlin", placeholder: "" },
  { name: "lisp", placeholder: "" },
  { name: "lua", placeholder: "" },
  { name: "markdown", placeholder: "" },
  { name: "matlab", placeholder: "" },
  { name: "pascal", placeholder: "" },
  { name: "plaintext", placeholder: "" },
  { name: "powershell", placeholder: "" },
  { name: "objectivec", placeholder: "" },
  { name: "php", placeholder: "" },
  { name: "ruby", placeholder: "" },
  { name: "rust", placeholder: "" },
  { name: "scala", placeholder: "" },
  { name: "scss", placeholder: "" },
  { name: "sql", placeholder: "" },
  { name: "swift", placeholder: "" },
  { name: "toml", placeholder: "" },
  { name: "typescript", placeholder: "" },
  { name: "xml", placeholder: "" },
  { name: "yaml", placeholder: "" },
];
