import React from "react";
import cx from "classnames";

export interface BuiltProduct {
  name: string;
  description: string;
  imageSrc: string;
}

interface BuiltProductListItemProps extends BuiltProduct {
  reverse?: boolean;
}

export function BuiltProductListItem(props: BuiltProductListItemProps) {
  console.log(props.reverse);
  return (
    <div
      className={cx(
        "flex gap-7 mb-32 flex-col",
        props.reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div className="flex-[2]">
        <img src={props.imageSrc} />
      </div>
      <div className="flex flex-1 flex-col justify-end gap-8">
        <h3 className="text-5xl font-alt">{props.name}</h3>
        <p className="text-2xl">{props.description}</p>
      </div>
    </div>
  );
}
