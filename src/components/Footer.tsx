import { Link } from "@heroui/react";
import { MessageSquare, Share2 } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 px-6 bg-white dark:bg-black border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <Logo />
          <p className="font-bold text-2xl tracking-tight">B.oli</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="text-default-500 text-sm hover:text-primary">Terms of Service</Link>
          <Link href="#" className="text-default-500 text-sm hover:text-primary">Privacy Policy</Link>
          <Link href="#" className="text-default-500 text-sm hover:text-primary">Responsible Play</Link>
          <Link href="#" className="text-default-500 text-sm hover:text-primary">Support</Link>
        </div>

        <div className="flex gap-4">
          <div className="p-2 hover:bg-default-100 rounded-full cursor-pointer transition-colors">
            <MessageSquare size={20} className="text-default-500" />
          </div>
          <div className="p-2 hover:bg-default-100 rounded-full cursor-pointer transition-colors">
            <Share2 size={20} className="text-default-500" />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-[10px] text-default-400 uppercase tracking-widest">
           © 2026 Boli Interactive. Better Online Intelligence.
        </p>
      </div>
    </footer>
  );
}
