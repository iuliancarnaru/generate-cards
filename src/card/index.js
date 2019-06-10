import React from "react";

import ContentRow from "./content-row";
import FooterRow from "./footer-row";

export default ({ mods, image, contentRows, footerRows }) => {
  const hasMods = mods && mods.length;
  const hasContentRows = contentRows && contentRows.length;
  const hasFooterRows = footerRows && footerRows.length;

  const renderContent = () => {
    if (!hasContentRows) return null;

    return (
      <div className="card__content">
        {contentRows.map(row => (
          <ContentRow {...row} />
        ))}
      </div>
    );
  };

  const renderFooter = () => {
    if (!hasFooterRows) return null;

    return (
      <div className="card__footer">
        {footerRows.map(row => (
          <FooterRow {...row} />
        ))}
      </div>
    );
  };

  return (
    <div className={`card ${hasMods && mods.map(mod => `card--${mod}`)}`}>
      {image && <img className="card__image" src={image} alt="something" />}
      {renderContent()}
      {renderFooter()}
    </div>
  );
};
