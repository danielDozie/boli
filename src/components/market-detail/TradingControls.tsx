import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export function TradingControls({ yesProfit = "1.8x", noProfit = "2.4x" }: { yesProfit?: string, noProfit?: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-default-50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-sm ">
        <span className="text-success font-black text-xs uppercase tracking-wider">Profit {yesProfit}</span>
        <Button 
          variant="flat"
          color="success"
          className="w-full h-16 text-success text-2xl font-black rounded-2xl"
        >
          YES
        </Button>
        <span className="text-default-400 font-bold text-xs">Buy for ₦500.00</span>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-default-50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-sm ">
        <span className="text-danger font-black text-xs uppercase tracking-wider">Profit {noProfit}</span>
        <Button 
          variant="flat"
          color="danger"
          className="w-full h-16 text-danger text-2xl font-black rounded-2xl"
        >
          NO
        </Button>
        <span className="text-default-400 font-bold text-xs">Buy for ₦500.00</span>
      </motion.div>
    </div>
  );
}
