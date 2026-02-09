import { motion } from "framer-motion";

const items = [
  { label: "HOT NOW", color: "text-danger" },
  { label: "#Bitcoin", value: "+4.2%", color: "text-success" },
  { label: "#US Election", value: "98K Vol", color: "text-primary" },
  { label: "#WorldCup", value: "Starting Soon", color: "text-default-400" },
  { label: "#Nvidia", value: "-1.2%", color: "text-danger" },
];

export function Ticker() {
  return (
    <div className="w-full bg-white dark:bg-black border-b border-divider overflow-hidden py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-semibold">
            {item.label === "HOT NOW" && (
              <span className="bg-danger-50 text-danger px-3 py-1 rounded-full text-xs">
                {item.label}
              </span>
            )}
            {item.label !== "HOT NOW" && (
              <>
                <span className="text-default-900">{item.label}</span>
                <span className={item.color}>{item.value}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
