import React from "react";
import { StatsProps } from "../../pages/stats";

export default function Stats(props: StatsProps) {
  const { dataPVXG, dataPVXT } = props;
  let totalMessages = 0;
  if (dataPVXG) {
    dataPVXG.forEach((ele) => {
      totalMessages += Number(ele.count);
    });
  }

  return (
    <section className="pt-20 bg-gradient-to-r from-gray-950 to-gray-900">
      <h2 className="section-heading">PVX GROUPS STATS</h2>

      <div className="font-Inter text-sm">
        <p>ALL WHATSAPP PVX GROUPS MESSAGES STATS</p>
        <p className="my-4 text-gray-400">FROM 24 NOV 2021</p>
        <p>
          Please note that these figures may not be 100% accurate, as the PVX
          bot in WhatsApp groups is used to collect message counts and can
          sometimes be down. Messages sent during this time are not counted.
        </p>
      </div>

      {dataPVXG ? (
        <>
          <h2 className="mt-10 text-indigo-800 text-xl font-bold">
            <span className="underline">TOTAL GROUP MESSAGES: </span>
            <span>{totalMessages.toLocaleString("en-IN")}</span>
          </h2>
          <table className="mx-auto my-6 capitalize w-full ">
            <tbody className="w-full max-w-xl inline-block">
              {dataPVXG.map((group) => (
                <tr
                  className="border-b-gray-800 border-b font-Inter "
                  key={group.groupjid}
                >
                  <td className="p-1 text-left w-full lowercase first-letter:capitalize">
                    {group.gname.slice(8)}
                  </td>
                  <td className="p-1 text-right text-gray-200">
                    {group.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="border mb-4 px-2 py-1 text-sm w-full">
          NOTE: There is a problem with attaching the group stats data ! Contact
          PVX admins.
        </div>
      )}

      {dataPVXT ? (
        <>
          <h2 className="mt-10 text-indigo-800 text-xl  font-bold">
            <span className="underline">TOP MEMBER MESSAGES </span>
          </h2>
          <table className="mx-auto my-6 capitalize w-full ">
            <tbody className="w-full max-w-xl inline-block">
              {dataPVXT.map((member, index) => (
                <tr
                  className="border-b-gray-800 border-b"
                  key={member.memberjid}
                >
                  <td className="p-1 text-left w-full">
                    {index + 1}) {member.name}
                  </td>
                  <td className="p-1 text-right text-gray-200">
                    {member.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="border mb-4 px-2 py-1 text-sm w-full">
          NOTE: There is a problem with attaching the member stats data !
          Contact PVX admins.
        </div>
      )}
    </section>
  );
}
