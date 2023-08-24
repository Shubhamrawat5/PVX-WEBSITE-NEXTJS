import React from "react";
import PropTypes from "prop-types";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";
import { Wagroup } from "./GroupState";

export default function Groups(props: {
  wagroups: Wagroup[];
  isEnabled: boolean;
}) {
  const { wagroups, isEnabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {!isEnabled ? (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      ) : null}
      <Whatsapp wagroups={wagroups} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}

Groups.propTypes = {
  wagroups: PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isEnabled: PropTypes.bool.isRequired,
};
