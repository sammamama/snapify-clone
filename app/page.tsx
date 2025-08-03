'use client'

import SnapEditor from "@/components/SnapEditor";
import { useThemeStore } from "@/state/atom";

export default function Home() {
  const {themeHref} = useThemeStore();
  
  return (
    <div className="">
      <link
        rel="stylesheet"
        href={themeHref}
        crossOrigin="anonymous"
      />
      <SnapEditor />
    </div>
  );
}
