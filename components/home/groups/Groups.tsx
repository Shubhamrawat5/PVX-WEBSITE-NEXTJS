import React from "react";
import PropTypes from "prop-types";
import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";
import { Group } from "../../../pages";

export default function Groups(props: { groups: Group[]; isEnabled: boolean }) {
  const { groups, isEnabled } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      <Whatsapp groups={groups} isEnabled={isEnabled} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}

Groups.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      gname: PropTypes.string.isRequired,
      groupjid: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  isEnabled: PropTypes.bool.isRequired,
};
