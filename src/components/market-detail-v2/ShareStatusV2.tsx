import { Button } from "@heroui/react";
import { Share2, Smartphone, MessageCircle } from "lucide-react";

export function ShareStatusV2({ title }: { title: string }) {
  return (
    <div className="bg-white dark:bg-default-50 rounded-[32px] p-8 space-y-6 border border-divider">
      <div className="flex items-center gap-2 text-default-400 font-black text-xs uppercase tracking-widest">
        <Share2 size={16} />
        Share to Status
      </div>

      <div className="bg-default-900 rounded-3xl p-6 space-y-6 relative overflow-hidden group">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
               <span className="text-[10px] font-black text-white">B</span>
            </div>
            <span className="text-white font-black text-sm">BOLI</span>
          </div>
          <span className="bg-white/10 text-white/60 text-[8px] font-bold px-2 py-0.5 rounded-full">LIVE PREDICTION</span>
        </div>

        <h4 className="text-xl font-black text-white leading-tight">
          {title}
        </h4>

        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-[8px] font-bold text-success uppercase">Yes Odds</p>
            <p className="text-2xl font-black text-white leading-none">65%</p>
          </div>
          <div className="text-right space-y-1">
             <p className="text-[8px] font-bold text-white/40 uppercase">Volume</p>
             <p className="text-lg font-black text-white leading-none">$124K</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button className="h-14 rounded-2xl bg-[#25D366] text-white font-black" startContent={<MessageCircle size={20} />}>
          WhatsApp
        </Button>
        <Button className="h-14 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-black" startContent={<Smartphone size={20} />}>
          Stories
        </Button>
      </div>
    </div>
  );
}
