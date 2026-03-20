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
      <h2 className="text-2xl font-bold">24h Change Comparison</h2>
        <p className="mt-2 text-sm text-[#8fb39a]">
        Percentage change across tracked cryptocurrencies.
    </p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f3a2c" />
            <XAxis dataKey="name" stroke="#8fb39a" />
            <YAxis stroke="#8fb39a" />
            <Tooltip />
            <Bar dataKey="change" fill="#7fb38f" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}