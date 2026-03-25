"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart({ data }) {
  return (
    <div className="mt-10 rounded-xl border border-[#1f3a2c] bg-[#102118] p-5">
      <h2 className="text-2xl font-bold">24h Performance Overview</h2>
        <p className="mt-2 text-sm text-[#8fb39a]">
        Relative performance across tracked cryptocurrencies.
        </p>

      <div className="mt-6 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
            >
            <CartesianGrid strokeDasharray="2 4" stroke="#1f3a2c" opacity={0.3} />
            <XAxis dataKey="name" stroke="#8fb39a" />
            <YAxis stroke="#8fb39a" />
            <Tooltip
            contentStyle={{
            backgroundColor: "#07110c",
            border: "1px solid #1f3a2c",
            borderRadius: "8px",
            color: "#e6f3ea",
            }}
            labelStyle={{ color: "#7fb38f" }}
            />
            <Bar dataKey="change" fill="#7fb38f" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}