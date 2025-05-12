"use client";

import { useState } from "react";

export default function VPNSwitch() {
  const [enabled, setEnabled] = useState(false);
  const [region, setRegion] = useState("US");

  return (
    <div className=" ">
      <h2 className="text-xl font-semibold mb-2">VPN Switch</h2>

      <div className="flex items-center justify-between mb-3">
        <span className="">VPN Status:</span>
        <span
          className={`text-sm font-medium ${
            enabled ? "text-green-600" : "text-red-600"
          }`}
        >
          {enabled ? "Connected" : "Disconnected"}
        </span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <label htmlFor="region" className="">
          Server Region:
        </label>
        <select
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="US">Japan</option>
          <option value="EU">Russia</option>
          <option value="ASIA">Iran</option>
        </select>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`mt-2 w-full py-2 rounded text-white ${
          enabled ? "bg-red-600" : "bg-green-600"
        }`}
      >
        {enabled ? "Disconnect VPN" : "Connect VPN"}
      </button>
    </div>
  );
}
