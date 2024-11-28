import { Zap } from "lucide-react";
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

const ChargingValues = () => {
  const chargePointDistribution = [
    { chargePoint: 1, peakPower: 8.2, avgPower: 4.5 },
    { chargePoint: 2, peakPower: 11.1, avgPower: 6.3 },
    { chargePoint: 3, peakPower: 9.7, avgPower: 5.1 },
    { chargePoint: 4, peakPower: 7.5, avgPower: 4.2 },
    { chargePoint: 5, peakPower: 10.3, avgPower: 5.8 },
  ];

  return (
    <div className="h-[330px] p-3 md:p-4 border rounded-lg shadow-md">
      <h3 className="flex items-center mb-4 font-semibold md:text-xl">
        <Zap className="mr-2 text-yellow-400" />
        Charging Point Usage
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chargePointDistribution}
          margin={{ left: -20, right: 10, top: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="chargePoint"
            label={{
              value: "Charge Point",
              dy: 13,
            }}
          />
          <YAxis
            label={{
              value: "Power (kW)",
              angle: -90,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="peakPower" fill="#3B82F6" name="Peak Power" />
          <Bar dataKey="avgPower" fill="#10B981" name="Average Power" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChargingValues;
