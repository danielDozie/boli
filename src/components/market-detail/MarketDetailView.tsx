import { MarketHero } from "./MarketHero";
import { SentimentChart } from "./SentimentChart";
import { TradingControls } from "./TradingControls";
import { SidebarControls } from "./SidebarControls";
import { type Market } from "../../data/markets";
import { StreetGist } from "./StreetGist";

export function MarketDetailView({ market }: { market: Market }) {
  return (
    <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-10">
        <MarketHero title={market.title} /> 
        <SentimentChart sentiment={market.sentiment} />
        <TradingControls yesProfit={market.yesProfit} noProfit={market.noProfit} />
        <StreetGist />
      </div>

      <div className="lg:col-span-4">
        <SidebarControls title={market.title} />
      </div>
    </div>
  );
}
