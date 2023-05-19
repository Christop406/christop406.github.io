import React from "react";

interface ProcessItemProps {
  name: string;
  description: string;
}

export function ProcessItem(props: ProcessItemProps) {
  return (
    <>
      <span className="font-alt">{props.name}</span>
      <br />
      <p className="text-2xl mt-7">{props.description}</p>
    </>
  );
}
