import { Button, ButtonGroup } from "@heroui/react";
import { motion } from "framer-motion";

export function PriceChartV2({ title, yesPrice = "65¢", change = "+12.4% (24h)" }: { title: string, yesPrice?: string, change?: string }) {
  return (
    <div className="bg-white dark:bg-default-50 rounded-[32px] p-8 space-y-8 flex-1">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-xs font-bold text-default-400">Yes Price</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-5xl font-black">{yesPrice}</h2>
            <span className="text-success font-bold">{change}</span>
          </div>
        </div>
        <ButtonGroup variant="flat" className="bg-default-100 dark:bg-default-200 p-1 rounded-xl">
          <Button size="sm" className="rounded-lg font-bold min-w-[40px]">1H</Button>
          <Button size="sm" className="rounded-lg font-bold min-w-[40px] bg-white dark:bg-default-300 shadow-sm">1D</Button>
          <Button size="sm" className="rounded-lg font-bold min-w-[40px]">1W</Button>
        </ButtonGroup>
      </div>

      <div className="h-[350px] w-full relative">
        <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,250 C100,240 150,180 200,160 C250,140 300,220 350,200 C400,180 450,80 500,100 C550,120 600,180 700,140 L800,150 L800,300 L0,300 Z"
            fill="url(#chartGradient)"
          />
          <motion.path
            d="M0,250 C100,240 150,180 200,160 C250,140 300,220 350,200 C400,180 450,80 500,100 C550,120 600,180 700,140 L800,150"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.circle 
            cx="800" cy="150" r="6" fill="#7c3aed" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2 }}
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] font-bold text-default-400 uppercase tracking-widest pt-4 border-t border-divider">
          <span>12 PM</span>
          <span>4 PM</span>
          <span>8 PM</span>
          <span>12 AM</span>
          <span>Now</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-default-50 dark:bg-default-100 p-6 rounded-2xl items-center justify-between">
          <p className="text-[10px] uppercase font-black text-default-400 mb-1">Market Cap</p>
          <p className="text-xl font-black">$82,400</p>
        </div>
        <div className="bg-default-50 dark:bg-default-100 p-6 rounded-2xl items-center justify-between">
          <p className="text-[10px] uppercase font-black text-default-400 mb-1">Open Interest</p>
          <p className="text-xl font-black">$12,150</p>
        </div>
      </div>
    </div>
  );
}
