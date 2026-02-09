import { Button, Link } from "@heroui/react";
import { nigerianMarkets, getIcon } from "../data/markets";
import { MarketCard } from "./MarketCard";

export function HotMarkets() {
  // Get top 4 active markets for the "Hot" section
  const hotMarkets = nigerianMarkets
    .filter(m => m.status === "active")
    .slice(0, 4);

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Hot Markets
        </h2>
        <Button 
          as={Link}
          href="/markets"
          variant="light" 
          color="primary" 
          className="font-bold underline text-sm"
        >
          View All Markets &gt;
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotMarkets.map((market) => {
          const Icon = getIcon(market.iconName);
          return (
            <MarketCard 
              key={market.id} 
              {...market} 
              icon={<Icon size={24} className="text-primary" />} 
            />
          );
        })}
      </div>
    </div>
  );
}
