"use client"

import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode | string;
  position?: string;
  hoverEnabled?: boolean;
  fontWeight?: string;
  fontSize?: string;
  className?: string;
  onClick?: () => void;
}

export default function BracketText({
  children,
  position = "before:-left-2 after:-right-2",
  hoverEnabled = true,
  fontWeight,
  fontSize = "text-sm",
  className,
  onClick,
}: Props) {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      id="hoverBrackets"
      className={classNames(
        "flex items-center before:relative after:relative before:duration-200 after:duration-200",
        {
          ["hover:before:left-0 hover:after:right-0 cursor-pointer"]:
            hoverEnabled,
        },
        fontWeight,
        fontSize,
        position,
        className
      )}
    >
      {children}
    </div>
  );
}
