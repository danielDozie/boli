import React from "react";
import { Button, Card, CardBody, Avatar, Chip } from "@heroui/react";
import { Phone, Utensils, Zap, Ticket, Plus, Volume2, ArrowRight, Music, Wifi } from "lucide-react";

const rewards = [
  {
    title: "MTN 1.5GB DATA",
    description: "30-day bundle. Instant top-up.",
    price: "1,200 NC",
    category: "DATA",
    icon: <Wifi size={24} className="text-[#ffcc00]" />, // MTN Yellowish
    color: "bg-[#ffcc00]/10"
  },
  {
    title: "AIRTEL ₦500 CREDIT",
    description: "Direct airtime for all lines.",
    price: "450 NC",
    category: "AIRTIME",
    icon: <Phone size={24} className="text-[#ff0000]" />, // Airtel Red
    color: "bg-[#ff0000]/10"
  },
  {
    title: "JUMIA ₦2K VOUCHER",
    description: "Valid for food & electronics.",
    price: "4,500 NC",
    category: "LIFESTYLE",
    icon: <Utensils size={24} className="text-orange-500" />,
    color: "bg-orange-500/10"
  },
  {
    title: "WIZKID CONCERT ENTRY",
    description: "Raffle entry for VIP tickets.",
    price: "8,500 NC",
    category: "EVENT",
    icon: <Music size={24} className="text-purple-500" />,
    color: "bg-purple-500/10"
  },
  {
    title: "GLO 2GB DATA",
    description: "Grandmaster of data bundle.",
    price: "1,100 NC",
    category: "DATA",
    icon: <Wifi size={24} className="text-[#008000]" />, // Glo Green
    color: "bg-[#008000]/10"
  }
];

export function RedeemMarketplace() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2">
         <div className="space-y-0.5">
            <h2 className="text-2xl font-black  tracking-tight uppercase">THE MARKET</h2>
            <p className="font-black text-[9px] uppercase tracking-[0.2em]">Spend your Naira-Coin</p>
         </div>
         <Button variant="light" size="sm" className="font-black text-[9px] uppercase tracking-widest">
            EXPLORE ALL
         </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rewards.map((item, i) => (
          <div key={i} className="dark:bg-[#1a1625] bg-white rounded-3xl p-5 space-y-4 transition-colors group cursor-pointer border-none shadow-sm">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${item.color} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div className="bg-white/5 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest">
                 {item.category}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-sm font-black tracking-tight leading-none uppercase">{item.title}</h3>
              <p className="text-[9px] font-bold leading-tight uppercase tracking-wide truncate">{item.description}</p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <p className="text-xs font-black text-primary">{item.price}</p>
              <Button isIconOnly size="sm" className="w-8 h-8 rounded-full bg-primary  scale-0 group-hover:scale-100 transition-transform shadow-lg">
                 <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        ))}

        {/* Suggest Card - Smaller */}
        <div className="bg-white/5 rounded-3xl flex flex-col items-center justify-center p-5 text-center space-y-2 group cursor-pointer hover:bg-white/10 transition-all border-2 border-dashed border-white/5">
           <Plus size={20} className="/20 group-hover:text-primary transition-colors" />
           <p className="font-black text-[10px] uppercase tracking-widest">Request Item</p>
        </div>
      </div>

      {/* Compact Marquee */}
      <div className="bg-white dark:bg-[#1a1625] rounded-2xl px-6 py-4 flex items-center gap-6 overflow-hidden">
         <div className="flex items-center gap-2 shrink-0 border-r border-white/5 pr-6">
            <Volume2 size={14} className="text-primary" />
            <span className="text-[8px] font-black /20 uppercase tracking-[0.2em]">LIVE</span>
         </div>
         <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-default-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/50?u=${i+100}`} alt="user" />
                 </div>
                 <span className="text-[9px] font-bold /60">@user_{i} copped {rewards[i%5].title}</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
