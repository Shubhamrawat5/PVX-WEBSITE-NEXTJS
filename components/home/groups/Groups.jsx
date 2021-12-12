import Whatsapp from "./Whatsapp";
import Telegram from "./Telegram";
import OtherGroups from "./OtherGroups";

export default function Groups(props) {
  const { wagroups, isBlocked } = props;

  return (
    <section id="group-section" className="section">
      <h2 className="section-heading">PVX FAMILY GROUPS</h2>
      {isBlocked ? (
        <div id="err" className="err">
          NOTE: Whatsapp Group Links are currently blocked ! Contact PVX admins.
        </div>
      ) : null}
      <Whatsapp wagroups={wagroups} isBlocked={isBlocked} />
      <Telegram />
      <OtherGroups />
    </section>
  );
}
