import { Button, Chip } from "@heroui/react";
import { ArrowRight, Trophy, Smartphone, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

export function AwoofFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
      {/* Quick Oga Tasks - Sidebar (4 cols) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="md:col-span-12 lg:col-span-4 rounded-[32px] bg-[#C1B2FA] relative overflow-hidden group p-8 shadow-sm"
      >
        <div className="flex flex-col justify-between h-full relative z-10">
          <div className="space-y-4">
             <div className="inline-flex bg-black/10 px-3 py-1 rounded-full items-center gap-2">
                <Trophy size={12} className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black">Daily Oga Tasks</span>
             </div>
             <h2 className="text-3xl font-black text-black tracking-tighter leading-none uppercase">QUICK<br />MISSIONS</h2>
             <p className="text-black/40 font-bold text-[10px] uppercase tracking-widest">Perform tasks, earn instant coin.</p>
          </div>
          
          <div className="flex justify-between items-end">
             <div className="bg-black/10 w-16 h-16 rounded-[20px] flex items-center justify-center">
                <Smartphone className="text-black" size={32} />
             </div>
             <Button isIconOnly className="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 transition-colors">
                <ArrowRight size={24} className="text-black" />
             </Button>
          </div>
        </div>
      </motion.div>

      {/* Naira Blitz - Main Feature (8 cols) */}
      <motion.div 
        whileHover={{ scale: 1.005 }}
        className="md:col-span-12 lg:col-span-8 rounded-[32px] bg-[#FFD8B5] relative overflow-hidden group p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between h-full relative z-10 gap-8">
          <div className="space-y-6 flex-1 text-center md:text-left">
             <div className="inline-flex bg-black/10 px-4 py-1.5 rounded-full items-center gap-2">
                <Zap size={12} className="text-black animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black">Naira Blitz</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-none uppercase">NAIRA<br />DROPS</h2>
             <p className="text-black/40 font-bold text-[10px] uppercase tracking-widest">Limited time high-value reward drops.</p>
             
             <div className="flex items-center gap-2 justify-center md:justify-start">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="bg-black/5 px-4 py-2 rounded-xl text-[10px] font-black text-black/40 uppercase tracking-widest">
                   DROP {i+1}
                 </div>
               ))}
             </div>
          </div>

          <div className="relative group px-4">
             <div className="flex gap-3">
                {[ "₦1k", "₦5k", "₦10k" ].map((val, i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="bg-[#1a1625] w-16 h-20 rounded-[18px] flex items-center justify-center text-xs font-black text-white shadow-lg"
                    style={{ rotate: `${(i - 1) * 8}deg` }}
                  >
                    {val}
                  </motion.div>
                ))}
             </div>
          </div>

          <Button isIconOnly className="absolute bottom-6 right-6 w-12 h-12 rounded-2xl bg-[#1a1625] text-white shadow-xl hover:scale-110 transition-transform">
             <ArrowRight size={24} />
          </Button>
        </div>
      </motion.div>

      {/* Awoof Leaderboard - Wide Bottom (12 cols) */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="md:col-span-12 rounded-[32px] bg-black relative overflow-hidden group p-8 shadow-lg"
      >
          <div className="flex flex-col md:flex-row items-center justify-between h-full relative z-10 gap-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
             <div className="inline-flex bg-white/20 px-3 py-1 rounded-full items-center gap-2">
                <Star size={12} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Boli Oracles</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none uppercase">ORACLES</h2>
             <p className="text-white/40 font-bold text-[10px] uppercase tracking-widest">The baddest chargers on Boli right now.</p>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex -space-x-4">
                {[ 1, 2, 3, 4, 5 ].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border-2 border-primary overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+50}`} alt="user" />
                  </div>
                ))}
             </div>
             <div className="text-right">
                <p className="text-white font-black text-lg leading-none">₦2.5M+</p>
                <p className="text-white/40 text-[9px] font-black uppercase tracking-widest underline decoration-[#00e676]">Prize Pool</p>
             </div>
          </div>

          <Button className="h-12 px-8 rounded-xl bg-white text-black font-black text-xs tracking-widest uppercase hover:bg-white/90 transition-all">
             VIEW RANKING
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
