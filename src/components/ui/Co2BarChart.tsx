import { co2Comparison } from "@/lib/constants";

const maxKg = Math.max(...co2Comparison.map((item) => item.kg));

export default function Co2BarChart() {
  return (
    <div className="my-6 space-y-4" role="img" aria-label="CO2 comparison for Amsterdam to Berlin: European Sleeper 12 kg, Car 89 kg, Flight 142 kg">
      {co2Comparison.map(({ mode, kg, color }) => (
        <div key={mode}>
          <div className="mb-1 flex items-baseline justify-between text-sm">
            <span className="font-medium">{mode}</span>
            <span className="text-foreground/70">{kg} kg CO₂</span>
          </div>
          <div className="h-3 w-full rounded-full bg-black/5">
            <div
              className={`h-3 rounded-full ${color}`}
              style={{ width: `${(kg / maxKg) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <p className="mt-4 rounded-lg bg-spark-green px-4 py-3 text-sm font-medium text-foreground">
        Taking the train saves up to 92% CO₂ compared to flying
      </p>
    </div>
  );
}
