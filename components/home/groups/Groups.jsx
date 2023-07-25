import React from "react";
import PropTypes from "prop-types";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";

export default function Groups(props) {
  const { wagroups, isEnabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {!isEnabled ? (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      ) : null}
      <Whatsapp wagroups={wagroups} isEnabled={isEnabled} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}

Groups.propTypes = {
  wagroups: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isEnabled: PropTypes.number.isRequired,
};

// TODO: make isEnabled bool
