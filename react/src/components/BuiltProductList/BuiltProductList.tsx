import React from "react";
import { BuiltProduct, BuiltProductListItem } from "./BuiltProductListItem";

export interface BuiltProductListProps {
  items: BuiltProduct[];
}

export function BuiltProductList(props: BuiltProductListProps) {
  return (
    <>
      {props.items.map((item, idx) => (
        <BuiltProductListItem
          key={idx}
          imageSrc={item.imageSrc}
          name={item.name}
          description={item.description}
          reverse={idx % 2 !== 0}
        />
      ))}
    </>
  );
}
