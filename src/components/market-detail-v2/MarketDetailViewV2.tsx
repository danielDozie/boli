import { Button, Chip } from "@heroui/react";
import { ChevronRight, Users, LineChart, Bell, BookmarkPlus } from "lucide-react";
import { PriceChartV2 } from "./PriceChartV2";
import { StreetGistV2 } from "./StreetGistV2";
import { TakePositionV2 } from "./TakePositionV2";
import { ShareStatusV2 } from "./ShareStatusV2";
import { type Market } from "../../data/markets";

export function MarketDetailViewV2({ market }: { market: Market }) {
  return (
    <div className="py-8 space-y-10">
      {/* Breadcrumbs & Header */}
      <div className="space-y-6">
        <nav className="flex items-center gap-2 text-default-400 text-xs font-bold uppercase tracking-widest">
          <span>Markets</span>
          <ChevronRight size={12} />
          <span className="text-primary">{market.category}</span>
          <ChevronRight size={12} />
          <span>{market.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Chip size="sm" color="success" className="font-black text-[10px] uppercase h-6 px-3">Live Market</Chip>
              <span className="text-default-400 text-[10px] font-bold uppercase tracking-widest">Ends in 4 days</span>
            </div>
            <h1 className="text-6xl font-black tracking-tight">{market.title}</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-default-400 font-bold text-sm">
                <LineChart size={16} />
                <span>$124,500 Vol</span>
              </div>
              <div className="flex items-center gap-2 text-default-400 font-bold text-sm">
                <Users size={16} />
                <span>1,240 Traders</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="flat" className="h-14 px-8 rounded-2xl font-black gap-2 bg-default-100 dark:bg-default-200">
               <BookmarkPlus size={20} />
               Follow
            </Button>
            <Button color="primary" className="h-14 px-10 rounded-2xl font-black text-lg bg-success text-white shadow-xl shadow-success/20">
               Trade Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[800px]">
        {/* Left Column: Price Chart */}
        <div className="lg:col-span-5 flex flex-col">
          <PriceChartV2 title={market.title} />
        </div>

        {/* Middle Column: Street Gist */}
        <div className="lg:col-span-4 flex flex-col">
           <StreetGistV2 />
        </div>

        {/* Right Column: Positions & Share */}
        <div className="lg:col-span-3 space-y-8 flex flex-col">
          <TakePositionV2 />
          <ShareStatusV2 title={market.title} />
        </div>
      </div>
    </div>
  );
}
