import React, { useContext } from "react";
import { NavigationContext } from "../context";
import { Link } from "react-router-dom";

interface FooterProps {
  onBackToTop?: () => unknown;
}

export function Footer(props: FooterProps) {
  const navContext = useContext(NavigationContext);
  return (
    <div className="border-t">
      <div className="flex justify-between p-5">
        <ul className="flex gap-2">
          {navContext.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        {props.onBackToTop && (
          <button onClick={props.onBackToTop}>Back to Top ↑</button>
        )}
      </div>
    </div>
  );
}
