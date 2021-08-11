import React from "react";
import {
  toastWrapper,
  hiding,
  showing,
  glowOnHover,
} from "./Toast.module.scss";

export function Toast({ show, duration = 1000 }) {
  const [visible, setVisible] = React.useState(show);
  const [animation, setAnimation] = React.useState("");

  React.useEffect(() => {
    if (show) {
      setVisible(true);
    }
    const timeout = setTimeout(() => {
      setAnimation("");
      setVisible(show);
    }, duration);
    setAnimation(show ? showing : hiding);
    return () => clearTimeout(timeout);
  }, [show, duration]);

  return visible ? (
    <div className={`${toastWrapper} ${animation} `}>Added To Cart</div>
  ) : null;
}
