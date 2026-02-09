import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function SentimentChart({ sentiment = "Highly Bullish" }: { sentiment?: string }) {
  return (
    <div className="bg-white dark:bg-default-50 rounded-[40px] p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-black text-default-400">Market Sentiment</p>
          <div className="flex items-center gap-2 font-black text-3xl">
            {sentiment}
            <TrendingUp className="text-success" size={28} />
          </div>
        </div>
        <div className="text-right">
          <p className="text-5xl font-black">78% YES</p>
        </div>
      </div>

      <div className="h-[180px] w-full relative flex items-center justify-center overflow-hidden rounded-3xl bg-default-50/50">
        {/* SVG Curve for the chart */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ffcdb2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C150,50 250,150 400,100 C550,50 650,150 800,100"
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.circle cx="150" cy="80" r="4" fill="#7c3aed" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
          <motion.circle cx="270" cy="115" r="4" fill="#ffcdb2" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
          <motion.circle cx="450" cy="100" r="6" fill="#10b981" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
        </svg>

        <div className="absolute bottom-4 left-0 right-0 px-8 flex justify-between text-[10px] font-black text-default-400 uppercase tracking-widest">
          <span>1h ago</span>
          <span>30m ago</span>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
}
