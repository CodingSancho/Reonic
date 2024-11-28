import React, { useState } from "react";

type TimeInterval = "year" | "month" | "week" | "day";

const TimeIntervalSelect: React.FC = () => {
  const [selectedInterval, setSelectedInterval] = useState<TimeInterval>("day");

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedInterval(event.target.value as TimeInterval);
  };

  return (
    <div className="w-full max-w-xs">
      <select
        value={selectedInterval}
        onChange={handleIntervalChange}
        className="block w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {(["year", "month", "week", "day"] as TimeInterval[]).map(
          (interval) => (
            <option key={interval} value={interval}>
              {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default TimeIntervalSelect;
