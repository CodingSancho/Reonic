import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TimeIntervalSelect from "./TimeIntervalSelect";

const ChargingEvents = () => {
  const monthlyChargingEvents = [
    { month: "Jan", events: 3452, energyConsumed: 45678 },
    { month: "Feb", events: 3789, energyConsumed: 49876 },
    { month: "Mar", events: 4123, energyConsumed: 54321 },
    { month: "Apr", events: 4456, energyConsumed: 58765 },
    { month: "May", events: 4712, energyConsumed: 62345 },
    { month: "Jun", events: 5089, energyConsumed: 67890 },
  ];

  return (
    <div className="h-[350px] p-3 md:p-4 border rounded-lg shadow-md">
      <h3 className="flex items-center mb-1 font-semibold md:text-xl">
        <TrendingUp className="mr-2 text-red-600" />
        Charging Events
      </h3>
      <div className="mb-1">
        <TimeIntervalSelect />
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={monthlyChargingEvents}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="events"
            label={{
              value: "Charging Events",
              angle: -90,
              position: "insideLeft",
              dy: 50,
            }}
          />
          <YAxis
            yAxisId="energy"
            orientation="right"
            label={{
              value: "Energy (kWh)",
              angle: 90,
              position: "insideRight",
              dx: 4,
              dy: 40,
            }}
          />
          <Tooltip />
          <Bar
            yAxisId="events"
            dataKey="events"
            fill="#3B82F6"
            name="Charging Events"
          />
          <Bar
            yAxisId="energy"
            dataKey="energyConsumed"
            fill="#10B981"
            name="Energy Consumed"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChargingEvents;
