import { Button, Input, Tabs, Tab } from "@heroui/react";
import { useState } from "react";

export function TakePositionV2() {
  const [selected, setSelected] = useState("yes");

  return (
    <div className="bg-primary rounded-[32px] p-8 space-y-8 shadow-xl shadow-primary/20">
      <h3 className="text-2xl font-black text-white">Take a Position</h3>

      <div className="bg-white/10 p-1 rounded-2xl flex">
        <Button 
          fullWidth 
          className={`h-14 rounded-xl font-black text-lg transition-all ${selected === 'yes' ? 'bg-black text-white' : 'bg-transparent text-white/60'}`}
          onPress={() => setSelected('yes')}
        >
          YES 65¢
        </Button>
        <Button 
          fullWidth 
          className={`h-14 rounded-xl font-black text-lg transition-all ${selected === 'no' ? 'bg-black text-white' : 'bg-transparent text-white/60'}`}
          onPress={() => setSelected('no')}
        >
          NO 35¢
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-white/60 text-xs font-bold uppercase tracking-wider">
          <span>Amount</span>
          <span>Balance: $420.50</span>
        </div>
        <div className="relative">
          <Input 
            value="50.00"
            classNames={{
              input: "text-4xl font-black text-white placeholder:text-white/30",
              inputWrapper: "h-20 bg-white/10 hover:bg-white/20 px-8 rounded-[24px] border-none",
            }}
          />
          <span className="absolute right-8 top-1/2 -translate-y-1/2 text-2xl font-black text-white/40">USD</span>
        </div>
      </div>

      <Button className="w-full h-20 bg-black text-white text-xl font-black rounded-[24px] shadow-2xl">
        Buy {selected === 'yes' ? 'Yes' : 'No'}
      </Button>
    </div>
  );
}
