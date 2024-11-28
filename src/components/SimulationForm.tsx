import React, { useState } from "react";
import { z } from "zod";

const ChargingSimulationSchema = z.object({
  chargePoints: z
    .number()
    .min(1, { message: "At least 1 charge point required" })
    .max(50, { message: "Maximum 50 charge points allowed" })
    .default(20),
  arrivalMultiplier: z
    .number()
    .min(20, { message: "Minimum multiplier is 20%" })
    .max(200, { message: "Maximum multiplier is 200%" })
    .default(100),
  consumption: z
    .number()
    .min(10, { message: "Minimum consumption is 10 kWh" })
    .max(30, { message: "Maximum consumption is 30 kWh" })
    .default(18),
  chargingPower: z
    .number()
    .positive({ message: "Charging power must be positive" })
    .max(22, { message: "Maximum charging power is 22 kW" })
    .default(11),
});

const SimulationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    chargePoints: 20,
    arrivalMultiplier: 100,
    consumption: 18,
    chargingPower: 11,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("Multiplier") || name === "chargingPower"
          ? parseFloat(value)
          : parseInt(value, 10),
    }));
  };

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data
      ChargingSimulationSchema.parse(formData);
      setErrors({});

      alert(`Following formdata sent for calculations:
            Number of Charge Points: ${formData.chargePoints}
            Arrival Multiplier: ${formData.arrivalMultiplier}%
            Consumption: ${formData.consumption} kWh
            Charging Power: ${formData.chargingPower} kW`);

      // example AWS Lambda function call, to be moved to parent component
      /* 
    async function lambdaSimulation() {
      try {
        const response = await fetch('https://aws-lambda-endpoint.com/simulate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AWS_LAMBDA_API_KEY}`
          },
          body: JSON.stringify({
            chargePoints: formData.chargePoints,
            arrivalMultiplier: formData.arrivalMultiplier,
            consumption: formData.consumption,
            chargingPower: formData.chargingPower
          })
        });

        if (!response.ok) {
          throw new Error('Simulation calculation failed');
        }

        const simulationResults = await response.json();
        return simulationResults;
      } catch (error) {
        console.error('Lambda simulation error:', error);
        throw error;
      }
    }
    */
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as Record<string, string>);

        setErrors(errorMap);
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="grid w-full gap-4 md:grid-cols-1 justify-items-center">
        <form onSubmit={handleSimulate} className="space-y-4">
          <div>
            <label htmlFor="chargePoints" className="block mb-2 font-medium">
              Number of Charge Points
            </label>
            <input
              type="number"
              id="chargePoints"
              name="chargePoints"
              value={formData.chargePoints}
              onChange={handleInputChange}
              min="1"
              max="50"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.chargePoints ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.chargePoints && (
              <p className="mt-1 text-sm text-red-500">{errors.chargePoints}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="arrivalMultiplier"
              className="block mb-2 font-medium"
            >
              Arrival Probability Multiplier (%)
            </label>
            <input
              type="number"
              id="arrivalMultiplier"
              name="arrivalMultiplier"
              value={formData.arrivalMultiplier}
              onChange={handleInputChange}
              min="20"
              max="200"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.arrivalMultiplier ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.arrivalMultiplier && (
              <p className="mt-1 text-sm text-red-500">
                {errors.arrivalMultiplier}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="consumption" className="block mb-2 font-medium">
              Consumption of the cars (kWh)
            </label>
            <input
              type="number"
              id="consumption"
              name="consumption"
              value={formData.consumption}
              onChange={handleInputChange}
              min="1"
              max="50"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.consumption ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.consumption && (
              <p className="mt-1 text-sm text-red-500">{errors.consumption}</p>
            )}
          </div>

          <div>
            <label htmlFor="chargingPower" className="block mb-2 font-medium">
              Charging Power per Point (kW)
            </label>
            <input
              type="number"
              id="chargingPower"
              name="chargingPower"
              value={formData.chargingPower}
              onChange={handleInputChange}
              step="0.1"
              min="0"
              max="22"
              className={`w-full px-3 py-2 border rounded-md ${
                errors.chargingPower ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.chargingPower && (
              <p className="mt-1 text-sm text-red-500">
                {errors.chargingPower}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleSimulate}
          >
            Run Simulation
          </button>
        </form>
      </div>
    </div>
  );
};

export default SimulationForm;
