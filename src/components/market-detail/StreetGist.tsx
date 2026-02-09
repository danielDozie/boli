import { Avatar, Chip, Input } from "@heroui/react";
import { MessageSquare, Send } from "lucide-react";

export function StreetGist() {
    return (
        <div className="bg-white dark:bg-default-50 rounded-[40px] p-8 space-y-6 relative overflow-hidden">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">Street Gist</h3>
                    <MessageSquare size={20} className="text-primary" />
                </div>
                <Chip size="sm" className="bg-default-100 font-bold text-[10px]">124 Online</Chip>
            </div>

            <div className="space-y-4">
                <div className="flex gap-3">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
                    <div className="bg-default-100 p-3 rounded-2xl !rounded-tl-none flex-1">
                        <p className="text-[10px] font-black text-primary">Jade_Trader</p>
                        <p className="text-xs font-medium">BTC is looking juicy right now! Definitely hitting $70k 🚀</p>
                    </div>
                </div>

                <div className="flex gap-3 flex-row-reverse">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=me" />
                    <div className="bg-primary p-3 rounded-2xl !rounded-tr-none flex-1 text-white">
                        <p className="text-[10px] font-black opacity-60">You</p>
                        <p className="text-xs font-medium">Just dropped ₦2k on YES. Let's go!</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=3" />
                    <div className="bg-default-100 p-3 rounded-2xl !rounded-tl-none flex-1">
                        <p className="text-[10px] font-black text-danger">Leo_The_Bear</p>
                        <p className="text-xs font-medium">Nah, resistance is too strong. NO for me. 📉</p>
                    </div>
                </div>
            </div>

            <Input
                placeholder="Add to the gist..."
                endContent={<Send size={18} className="text-primary cursor-pointer" />}
                classNames={{
                    inputWrapper: "h-12 px-4 rounded-2xl bg-default-50 dark:bg-default-100 border-none",
                }}
            />
        </div>
    );
}