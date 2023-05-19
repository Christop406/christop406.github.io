import React from "react";

export interface SectionHeaderProps {
  index: number;
  label: string;
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className="flex-1">
      <h2 className="font-alt text-3xl">
        <span className="text-lime-500">
          // {String(props.index).padStart(2, "0")}
        </span>
        <br />
        <span className="whitespace-pre-line">{props.label}</span>
      </h2>
    </div>
  );
}
