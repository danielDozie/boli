import { Button, Input, Avatar, Chip, Progress } from "@heroui/react";
import { MessageSquare, Send, Trophy } from "lucide-react";
import { ShareMarket } from "./ShareMarket";

export function SidebarControls({ title = "this market" }: { title?: string }) {
  return (
    <div className="space-y-8">
      {/* Trade Amount */}
      <div className="bg-white dark:bg-default-50 rounded-[40px] p-8 space-y-6">
        <h3 className="text-xl font-bold">Trade Amount</h3>
        <div className="grid grid-cols-2 gap-4">
          {[500, 1000, 2500, 5000].map((amt) => (
            <Button key={amt} variant="flat" className="h-14 rounded-2xl font-bold text-lg bg-default-100 dark:bg-default-200">
              <span className="text-warning mr-1">₦</span> {amt.toLocaleString()}
            </Button>
          ))}
        </div>
        <Input 
          placeholder="Custom Amount" 
          startContent={<span className="text-warning font-bold">₦</span>}
          classNames={{
            input: "font-bold",
            inputWrapper: "h-14 px-6 rounded-2xl bg-default-100 dark:bg-default-200 border-none",
          }}
        />
      </div>

      {/* Daily Streak */}
      <div className="bg-[#FFEDEB] dark:bg-[#2A1F1F] rounded-[40px] p-8 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Trophy className="text-danger" size={24} />
            <h3 className="text-lg font-bold">Daily Streak</h3>
          </div>
          <span className="font-black text-sm">4/5 Days</span>
        </div>
        <Progress color="danger" value={80} className="h-2" />
        <p className="text-xs text-default-500 font-medium">Complete one more trade to earn ₦500 bonus!</p>
      </div>

      {/* Share Market */}
      <ShareMarket title={title} />
    </div>
  );
}
