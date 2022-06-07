import Image from "next/image";
export default function Bot() {
  return (
    <section id="bot-section" className="section">
      <h2 className="section-heading">PVX BOT</h2>
      <p className="subheading-p">
        PVX Bot is a whatsapp bot for all PVX groups that has a variety of
        commands with different functionalies.
        <br />
        <ul>
          <li>
            Commands with admin access include adding & removing members, giving
            warnings, adding in blacklist and also changing the group settings.
          </li>
          <li>
            Some of the commands that members can access are sticker maker,
            insta-youtube video downloader, cricket live scores, group voting,
            etc.
          </li>
          <li>
            It also keeps track of various stats like the number of messages
            each member has sent in various PVX groups, the most active group,
            the list of inactive members etc.
          </li>
          <li>
            It posts daily news in Tech and Study groups and also greets new
            members with a welcome message whenever they join any of the PVX
            groups.
          </li>
          <li>
            It automatically bans any user with a non-Indian number (any number
            without +91 code).
          </li>{" "}
          <li>
            It also forwards every sticker that is sent to any of the PVX groups
            to another group i.e. Sticker Only, where members can have access to
            different different types of stickers.
          </li>
        </ul>
        <u>
          <a href="https://github.com/Shubhamrawat5/whatsapp-bot-md">
            Github Bot Repo
          </a>
        </u>
      </p>
    </section>
  );
}
