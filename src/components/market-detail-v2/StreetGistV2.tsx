import { Avatar, Chip, Input } from "@heroui/react";
import { MessageSquare, Send } from "lucide-react";

export function StreetGistV2() {
  return (
    <div className="bg-white dark:bg-default-50 rounded-[32px] p-6 flex flex-col h-full border border-divider">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} className="text-primary" />
          <h3 className="text-lg font-bold">Street Gist</h3>
        </div>
        <span className="text-[10px] text-default-400 font-bold uppercase">154 debating</span>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar size="sm" className="w-6 h-6" src="https://i.pravatar.cc/150?u=a" />
            <span className="text-xs font-black">Lekan_X</span>
            <Chip size="sm" variant="flat" color="success" className="h-5 text-[9px] font-black uppercase">Skin in Game</Chip>
            <span className="text-[10px] text-default-400 ml-auto">2m ago</span>
          </div>
          <div className="bg-default-100 dark:bg-default-200 p-4 rounded-2xl rounded-tl-none">
            <p className="text-sm font-medium leading-relaxed">ODG is winning this. The album stats are crazy. 65¢ is a steal right now, loading more YES.</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar size="sm" className="w-6 h-6" src="https://i.pravatar.cc/150?u=b" />
            <span className="text-xs font-black">Tolu_B</span>
            <span className="text-[10px] text-default-400 ml-auto">15m ago</span>
          </div>
          <div className="bg-default-100 dark:bg-default-200 p-4 rounded-2xl rounded-tl-none">
            <p className="text-sm font-medium leading-relaxed">Academy is unpredictable though. I'm staying out for now.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Chip size="sm" className="bg-primary/10 text-primary font-black text-[10px] uppercase px-4">
            @BIGWIZ_TRADER BET $1,200 ON YES
          </Chip>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Avatar size="sm" className="w-6 h-6" src="https://i.pravatar.cc/150?u=c" />
            <span className="text-xs font-black">BigWiz_Trader</span>
            <Chip size="sm" variant="flat" color="primary" className="h-5 text-[9px] font-black uppercase">Whale</Chip>
            <span className="text-[10px] text-default-400 ml-auto">45m ago</span>
          </div>
          <div className="bg-default-100 dark:bg-default-200 p-4 rounded-2xl rounded-tl-none">
            <p className="text-sm font-medium leading-relaxed">People sleeping on the Grammys love for African Giants. This is a lock.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-divider">
        <Input 
          placeholder="Join the gist..." 
          endContent={<Send size={18} className="text-primary cursor-pointer" />}
          classNames={{
            input: "text-sm font-medium",
            inputWrapper: "h-12 px-4 rounded-xl bg-default-50 dark:bg-default-100 border-none",
          }}
        />
      </div>
    </div>
  );
}
