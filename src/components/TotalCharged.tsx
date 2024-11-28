import { BatteryFull } from "lucide-react";

const TotalCharged = () => {
  return (
    <h3 className="rounded-lg border shadow-md md:text-xl p-4 h-[60px] flex justify-between mb-2 font-semibold">
      <div className="flex flex-row">
        <BatteryFull className="mr-2 text-green-600 md:mt-1" />
        Total Charged
      </div>
      <div>1200 kWh</div>
    </h3>
  );
};

export default TotalCharged;
