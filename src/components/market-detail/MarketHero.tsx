import { Chip } from "@heroui/react";
import { motion } from "framer-motion";

export function MarketHero({ title }: { title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary p-12 rounded-[40px] relative overflow-hidden h-[300px] flex flex-col justify-center"
    >
      <div className="absolute top-8 left-12 flex items-center gap-2">
        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
        <Chip size="sm" className="bg-white/20 text-white font-bold text-[10px] uppercase border-none">
          Live Market
        </Chip>
      </div>

      <h1 className="text-5xl font-black text-white max-w-2xl leading-tight">
        {title}
      </h1>
      <p className="text-white/60 mt-4 font-medium text-lg">
        Predict the trend and level up your balance!
      </p>

      <div className="absolute right-12 top-1/2 -translate-y-1/2">
        <div className="w-24 h-24 bg-[#FFDBBB] rounded-full flex items-center justify-center shadow-xl">
          <span className="text-4xl font-black text-[#8A5124]">₦</span>
        </div>
      </div>
    </motion.div>
  );
}
