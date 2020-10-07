import * as React from "react";
import { IconType } from "react-icons/src/iconBase";
type iconButtonProps = {
  image?: string | IconType | undefined;
  className?: string;
};

export const IconButton: React.FC<iconButtonProps> = (props): any => {
  const { image, children, className } = props;
  if (typeof image !== "string") {
    return (
      <div className={className}>
        <a className="appIconContainer">
          <span className="appIcon">{children}</span>
        </a>
      </div>
    );
  } else if (typeof image == "string") {
    return (
      <div className={className}>
        <a className="appIconContainer">
          <span className="appIcon">
            <img className="Icon" src={image}></img>
          </span>
        </a>
      </div>
    );
  }
};
