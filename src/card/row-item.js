import React from "react";

import Icon from "./icon";
import Icons from "../icons";

export default ({ format, text, label, image, icons, iconsPos }) => {
  const hasIcons = icons && icons.length;

  const renderIcons = () => {
    return icons.map(icon => <Icon icon={Icons[icon]} pos={iconsPos} />);
  };

  return (
    <span className={`card__row-item card__row-item--${format}`}>
      {hasIcons && iconsPos === "pre" && renderIcons()}
      {label && <span className="card__label">{label}&nbsp;|&nbsp;</span>}
      {text}
      {hasIcons && iconsPos === "post" && renderIcons()}
      {image && (
        <img className="card__author-img" src={image} alt="something" />
      )}
    </span>
  );
};
