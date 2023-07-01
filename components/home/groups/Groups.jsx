import React from "react";
import PropTypes from "prop-types";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";

export default function Groups(props) {
  const { wagroups, enabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {!enabled ? (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      ) : null}
      <Whatsapp wagroups={wagroups} enabled={enabled} />
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
  enabled: PropTypes.number.isRequired,
};

// TODO: make enabled bool
