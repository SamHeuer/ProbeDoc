import { cn } from "@/lib/util";
import React from "react";
import { ReactNode } from "react";
function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={
        (cn("mx-auto w-full max-w-screen-xl px-2.5 mx:px-20"), className)
      }
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
