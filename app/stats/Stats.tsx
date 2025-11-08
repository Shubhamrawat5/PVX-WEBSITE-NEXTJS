import React from "react";
import { DataPVXG, DataPVXT } from "./page";

export interface StatsProps {
  dataPVXG: DataPVXG[];
  dataPVXT: DataPVXT[];
}

export default function Stats(props: StatsProps) {
  const { dataPVXG, dataPVXT } = props;
  let totalMessages = 0;
  if (dataPVXG) {
    dataPVXG.forEach((ele) => {
      totalMessages += Number(ele.count);
    });
  }

  return (
    <section className="pt-20 pb-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white font-Inter min-h-screen">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          GROUP STATS
        </h2>
        <p className="mt-3 text-gray-300 text-sm">
          ALL WHATSAPP PVX GROUP MESSAGES STATS
        </p>
        <p className="mt-1 text-gray-500 text-xs">FROM 24 NOV 2021</p>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-10 text-gray-400 text-sm leading-relaxed">
        <p>
          (Please note that these figures may not be 100% accurate, as the PVX
          bot in WhatsApp groups collects message counts and may sometimes be
          offline. Messages sent during downtime are not included.)
        </p>
      </div>

      {/* <Graph dataPVXG={dataPVXG} /> */}

      {dataPVXG ? (
        <div className="max-w-4xl mx-auto mt-14">
          <div className="flex flex-col items-center mb-10">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              TOTAL GROUP MESSAGES
            </h3>
            <div className="text-3xl font-bold text-white tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              {totalMessages.toLocaleString("en-IN")}
            </div>
          </div>

          {/* GROUP STATS */}
          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/60 rounded-2xl py-4 px-2 sm:p-6 shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="divide-y divide-gray-800">
              {dataPVXG.map((group) => (
                <div
                  key={group.groupjid}
                  className="flex justify-between py-2 px-2 hover:bg-gray-800/30 rounded-md transition-all"
                >
                  <span className="capitalize text-left text-gray-300">
                    {group.gname.slice(8)}
                  </span>
                  <span className="text-gray-100 text-right font-medium">
                    {Number(group.count).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center border border-red-400 text-red-300 bg-red-950/30 px-4 py-2 rounded-lg w-fit mx-auto mt-6">
          ⚠️ Unable to load group stats data. Please contact PVX admins.
        </div>
      )}

      {dataPVXT ? (
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">
            TOP MEMBER MESSAGES
          </h3>

          <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700/60 rounded-2xl py-4 px-2 sm:p-6  shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
            <div className="divide-y divide-gray-800">
              {dataPVXT.map((member, index) => (
                <div
                  key={member.memberjid}
                  className="flex justify-between py-2 px-2 hover:bg-gray-800/30 rounded-md transition-all"
                >
                  <span className="text-gray-300 text-left">
                    <span className="text-gray-500 mr-2">#{index + 1}</span>
                    {member.name}
                  </span>
                  <span className="text-gray-100 text-right font-medium">
                    {Number(member.count).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center border border-red-400 text-red-300 bg-red-950/30 px-4 py-2 rounded-lg w-fit mx-auto mt-6">
          ⚠️ Unable to load member stats data. Please contact PVX admins.
        </div>
      )}
    </section>
  );
}
