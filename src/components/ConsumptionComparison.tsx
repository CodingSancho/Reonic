import { CalendarPlus } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TimeIntervalSelect from "./TimeIntervalSelect";

// Simulated EV charging data with multiple metrics
const chargingData = [
  {
    period: "Mon",
    chargingEvents: 35,
    maxPowerDemand: 132,
    energyConsumed: 456,
  },
  {
    period: "Tue",
    chargingEvents: 30,
    maxPowerDemand: 156,
    energyConsumed: 542,
  },
  {
    period: "Wed",
    chargingEvents: 12,
    maxPowerDemand: 118,
    energyConsumed: 412,
  },
  {
    period: "Thu",
    chargingEvents: 28,
    maxPowerDemand: 145,
    energyConsumed: 502,
  },
  {
    period: "Fri",
    chargingEvents: 30,
    maxPowerDemand: 178,
    energyConsumed: 621,
  },
  {
    period: "Sat",
    chargingEvents: 15,
    maxPowerDemand: 92,
    energyConsumed: 318,
  },
  {
    period: "Sun",
    chargingEvents: 18,
    maxPowerDemand: 105,
    energyConsumed: 365,
  },
];

const ConsumptionComparison: React.FC = () => {
  return (
    <div className="h-[350px] p-4 border rounded-lg shadow-md">
      <h2 className="flex items-center mb-1 font-semibold md:text-xl">
        <CalendarPlus className="mr-2 text-amber-400" />
        Energy Consumption
      </h2>
      <div className="mb-1">
        <TimeIntervalSelect />
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          data={chargingData}
          margin={{
            top: 5,
            right: -10,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="period" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="chargingEvents"
            name="Charging Events"
            fill="#8884d8"
          />
          <Bar
            yAxisId="left"
            dataKey="maxPowerDemand"
            name="Max Power Demand (kW)"
            fill="#82ca9d"
          />
          <Bar
            yAxisId="right"
            dataKey="energyConsumed"
            name="Energy Consumed (kWh)"
            fill="#ffc658"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConsumptionComparison;
