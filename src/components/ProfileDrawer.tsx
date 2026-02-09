import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Avatar,
  Chip,
  Progress,
  Divider,
} from "@heroui/react";
import {
  Wallet,
  Trophy,
  Target,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileDrawer({ isOpen, onClose }: ProfileDrawerProps) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md" backdrop="blur">
      <DrawerContent className="dark:bg-default-50">
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1 pt-8">
              <div className="flex items-center gap-4">
                <Avatar
                  isBordered
                  color="primary"
                  className="w-20 h-20"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <div className="space-y-1">
                  <h2 className="text-2xl font-black tracking-tight">Eizod Dev</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-default-500 text-sm font-medium">@eizod_trader</span>
                    <Chip size="sm" color="primary" variant="flat" className="text-[10px] font-black uppercase h-5">Pro</Chip>
                  </div>
                </div>
              </div>
            </DrawerHeader>

            <DrawerBody className="py-8 space-y-8 scrollbar-hide">
              {/* Wallet Section */}
              <div className="bg-default-100 dark:bg-default-200 rounded-3xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-default-500 font-bold text-xs uppercase tracking-widest">
                    <Wallet size={16} />
                    My Wallet
                  </div>
                  <Button variant="light" size="sm" isIconOnly className="rounded-full">
                    <ChevronRight size={18} />
                  </Button>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-black">₦45,250.00</p>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs">
                     <TrendingUp size={14} />
                     <span>+12.5% this week</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" color="primary" className="flex-1 font-bold rounded-xl h-10">Deposit</Button>
                  <Button size="sm" variant="flat" className="flex-1 font-bold rounded-xl h-10">Withdraw</Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-default-100 dark:bg-default-200 rounded-3xl p-5 space-y-3">
                  <Trophy size={24} className="text-warning" />
                  <div>
                    <p className="text-2xl font-black">124</p>
                    <p className="text-[10px] text-default-500 font-bold uppercase tracking-widest">Total Wins</p>
                  </div>
                </div>
                <div className="bg-default-100 dark:bg-default-200 rounded-3xl p-5 space-y-3">
                  <Target size={24} className="text-primary" />
                  <div>
                    <p className="text-2xl font-black">88%</p>
                    <p className="text-[10px] text-default-500 font-bold uppercase tracking-widest">Accuracy</p>
                  </div>
                </div>
              </div>

              {/* Daily Streak */}
              <div className="bg-primary/10 dark:bg-primary/5 rounded-3xl p-6 space-y-4 border border-primary/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CircleDollarSign size={20} className="text-primary" />
                    <span className="font-black text-sm">Daily Bonus</span>
                  </div>
                  <span className="text-primary font-black text-sm">₦500 left</span>
                </div>
                <Progress color="primary" value={75} className="h-2" />
                <p className="text-[10px] text-primary/70 font-bold uppercase tracking-widest text-center">
                  3/4 Predictions completed today
                </p>
              </div>

              {/* Menu Actions */}
              <div className="space-y-2 pb-8">
                <Button variant="light" fullWidth className="h-14 justify-between rounded-2xl px-6 font-bold" endContent={<ChevronRight size={18} />}>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-default-100 rounded-lg"><Settings size={20} className="text-default-600" /></div>
                    Account Settings
                  </div>
                </Button>
                <Button variant="light" fullWidth className="h-14 justify-between rounded-2xl px-6 font-bold" endContent={<ChevronRight size={18} />}>
                   <div className="flex items-center gap-4">
                    <div className="p-2 bg-default-100 rounded-lg"><Trophy size={20} className="text-default-600" /></div>
                    My Achievements
                  </div>
                </Button>
              </div>
            </DrawerBody>

            <DrawerFooter className="pb-8">
              <Button color="danger" variant="flat" fullWidth className="h-14 rounded-2xl font-bold gap-3" startContent={<LogOut size={20} />}>
                Sign Out
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
