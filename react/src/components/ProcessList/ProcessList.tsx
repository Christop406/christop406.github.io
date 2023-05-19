import React, { PropsWithChildren } from "react";
import { ProcessItem } from "./ProcessItem";

export interface ProcessListProps extends PropsWithChildren {
  items: { name: string; description: string }[];
}

export function ProcessList(props: ProcessListProps) {
  return (
    <div className="flex-1">
      <ul>
        {props.items.map((item, idx) => (
          <li key={idx} className="text-4xl md:text-6xl mb-28">
            <ProcessItem name={item.name} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  );
}
