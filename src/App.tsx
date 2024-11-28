import "./App.css";
import ChargingEvents from "./components/ChargingEvents";
import ChargingValues from "./components/ChargingValues";
import ExampleDay from "./components/ExampleDay";
import SimulationForm from "./components/SimulationForm";
import TotalCharged from "./components/TotalCharged";
import ConsumptionComparison from "./components/ConsumptionComparison";

function App() {
  return (
    <div>
      <h1 className="w-full mb-6 text-3xl font-bold">EV Charging Simulator</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="space-y-3">
          <SimulationForm />
          <TotalCharged />
        </div>
        <div className="space-y-3">
          <ChargingValues />
          <ChargingEvents />
        </div>
        <div className="space-y-3">
          <ExampleDay />
          <ConsumptionComparison />
        </div>
      </div>
    </div>
  );
}

export default App;
