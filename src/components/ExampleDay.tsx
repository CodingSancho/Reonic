import { Clock } from "lucide-react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";

const ExampleDay = () => {
  const hourlyChargingProfile = [
    { hour: "00", power: 12.5, events: 3 },
    { hour: "01", power: 8.7, events: 2 },
    { hour: "02", power: 5.2, events: 1 },
    { hour: "03", power: 3.1, events: 1 },
    { hour: "04", power: 2.5, events: 1 },
    { hour: "05", power: 6.8, events: 2 },
    { hour: "06", power: 45.6, events: 12 },
    { hour: "07", power: 89.3, events: 18 },
    { hour: "08", power: 112.7, events: 20 },
    { hour: "09", power: 87.4, events: 17 },
    { hour: "10", power: 65.2, events: 16 },
    { hour: "11", power: 52.1, events: 14 },
    { hour: "12", power: 43.8, events: 12 },
    { hour: "13", power: 49.6, events: 14 },
    { hour: "14", power: 62.3, events: 17 },
    { hour: "15", power: 78.5, events: 18 },
    { hour: "16", power: 95.7, events: 20 },
    { hour: "17", power: 88.2, events: 19 },
    { hour: "18", power: 69.4, events: 17 },
    { hour: "19", power: 48.6, events: 13 },
    { hour: "20", power: 35.2, events: 10 },
    { hour: "21", power: 25.7, events: 7 },
    { hour: "22", power: 18.3, events: 5 },
    { hour: "23", power: 14.6, events: 4 },
  ];

  return (
    <div>
      <div className="h-[330px] border shadow-md rounded-lg p-3 md:p-4">
        <h3 className="flex items-center mb-4 font-semibold md:text-xl">
          <Clock className="mr-2 text-purple-600" />
          Hourly Charging Profile
        </h3>

        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={hourlyChargingProfile}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis
              yAxisId="power"
              label={{
                value: "Power (kW)",
                angle: -90,
                dx: -10,
              }}
              className=""
            />
            <YAxis
              yAxisId="events"
              orientation="right"
              label={{
                value: "Charging Events",
                angle: 90,
                position: "insideRight",
                dy: 55,
                dx: -15,
              }}
            />
            <Tooltip />
            <Line
              yAxisId="power"
              type="monotone"
              dataKey="power"
              stroke="#3B82F6"
              name="Power Consumption"
            />
            <Line
              yAxisId="events"
              type="monotone"
              dataKey="events"
              stroke="#10B981"
              name="Charging Events"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-4 mb-2 text-xs md:text-base">
          <div className="p-3 rounded-lg bg-blue-50">
            <p className="text-xs text-gray-600 md:text-sm">Peak Power Hour</p>
            <p className="text-xs font-bold text-blue-600 md:text-base ">
              09:00 - 112.7 kW
            </p>
          </div>
          <div className="p-3 rounded-lg bg-green-50">
            <p className="text-xs text-gray-600 md:text-sm">
              Total Daily Events
            </p>
            <p className="font-bold text-green-600 ">294</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleDay;
