import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { notFoundImage, wrapper } from "../styles/404.module.scss";
const NotFoundPage = () => {
  return (
    <main className={`${wrapper} `}>
      <StaticImage
        src="../images/pixelnike.png"
        alt="pixelated nike running shoes"
        className={`${notFoundImage} `}
      />
      <Link to="/">Go Home</Link>
    </main>
  );
};

export default NotFoundPage;
