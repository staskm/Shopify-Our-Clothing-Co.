import React from "react";

import { wrapper, headerImage, headerText } from "./Header.module.scss";

export const Header = ({ text }) => {
  return (
    <header className={`${wrapper}`}>
      <div className={`${headerImage} `}>
        <div className={`${headerText} `}>
          {/* <p className="display-1 text-center">Featured</p> */}
          <p className="display-1 text-center">{text}</p>
        </div>
      </div>
    </header>
  );
};
