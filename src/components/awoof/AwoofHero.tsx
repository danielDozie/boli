import React from "react";
import { Button, Chip } from "@heroui/react";
import { Flame, Sparkles, Trophy } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

export const AwoofHero = () => {
  const controls = useAnimation();

  const handleSpin = async () => {
    // A simplified subtle animation for the compact version
    await controls.start({
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.4 }
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#C1B2FA] rounded-[40px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10"
    >
      <div className="flex-1 space-y-6 text-center md:text-left z-10">
        <div className="flex items-center justify-center md:justify-start gap-2">
           <Chip 
             variant="flat" 
             className="bg-primary/20 text-primary-400 font-black text-[9px] uppercase tracking-[0.2em] px-3 h-6"
           >
              Awoof Daily
           </Chip>
           <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">Live Spin</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
            CHOP 1M<br /><span className="text-primary">NAIRA-COINS</span>
          </h1>
          <p className="text-white/40 text-sm max-w-sm font-bold uppercase tracking-wide">
            One free spin every 24 hours. No stories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            className="h-12 px-8 rounded-xl font-black text-sm bg-primary text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
            startContent={<Flame size={18} fill="currentColor" />}
            onClick={handleSpin}
          >
            SPIN FOR FREE
          </Button>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-7 h-7 rounded-full bg-default-200 border-2 border-[#1a1625] overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="user" />
                  </div>
                ))}
             </div>
             <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">
               42k people spinning
             </span>
          </div>
        </div>
      </div>

      {/* Compact Visual instead of Wheel */}
      <motion.div 
        animate={controls}
        className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[40px]" />
        <div className="w-full h-full bg-[#2d283e] rounded-full flex items-center justify-center relative z-10 shadow-2xl">
           <div className="absolute inset-2 border-4 border-dashed border-white/5 rounded-full" />
           <div className="flex flex-col items-center">
              <Trophy size={48} className="text-warning mb-2" fill="currentColor" />
              <div className="bg-primary px-3 py-1 rounded-full text-[10px] font-black text-white">READY</div>
           </div>
        </div>
        
        {/* Floating Accents */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 3 + i, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
            style={{ 
              top: `${20 + i * 30}%`, 
              left: `${10 + i * 40}%` 
            }}
          >
            <Sparkles size={16} className="text-primary/40" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
