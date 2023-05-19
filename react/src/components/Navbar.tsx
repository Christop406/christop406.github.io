import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context";

export default function Navbar() {
  const navContext = useContext(NavigationContext);
  return (
    <nav className="p-5 lg:p-7 sticky">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Chris Gilardi</Link>
        </li>
        <span className="flex gap-5 lg:gap-7">
          <li aria-hidden className="text-lime-500">
            //
          </li>
          {navContext.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.name}.</Link>
            </li>
          ))}

          {/* <li>Work.</li>
          <li>Hire Me.</li> */}
        </span>
      </ul>
    </nav>
  );
}
