import React from "react";

import { wrapper, headerImage, headerText } from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={`${wrapper} mb-5`}>
      <div className={`${headerImage} `}>
        <div className={`${headerText} `}>
          <h1 className="display-1 text-center">
            Summer Sale <br /> 30% Off!
          </h1>
        </div>
      </div>
    </header>
  );
};
