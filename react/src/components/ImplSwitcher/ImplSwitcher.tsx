import React, { useState } from "react";
import cx from "classnames";
import './ImplSwitcher.scss';

export function ImplSwitcher() {
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => {
    setHidden((v) => !v);
  };

  return (
    <div
      className={cx(
        "fixed shadow-md bottom-4 right-4 flex gap-4 p-4 bg-emerald-600 rounded-md text-white transition-transform",
        hidden ? "translate-x-[85%]" : ''
      )}
    >
      <div className="flex flex-col justify-between">
        <i className="text-5xl fa-brands fa-angular"></i>
        <button
          onClick={() => toggleHidden()}
          className="text-md text-emerald-400"
        >
          <i className={cx('fa-solid', hidden ? 'fa-arrow-left' : 'fa-arrow-right')}></i>
        </button>
      </div>
      <div className="flex flex-col items-start justify-between">
        <span className="text-emerald-200">
          This site was built with React.
        </span>
        <span className="text-emerald-200">Need an Angular developer?</span>
        <a href="/">
          <i className="fa-solid fa-right-left text-xs"></i>&nbsp;
          <span className="underline">Switch to Angular</span>
        </a>
      </div>
    </div>
  );
}
