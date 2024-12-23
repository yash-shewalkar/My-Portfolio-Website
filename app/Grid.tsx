import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/Bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import Aboutcard from "./AboutCard";

export function Grid() {
  return (
    <div className="pb-32 pt-36" id="about">

   
      <Aboutcard/>

    </div>
  );
}

