import { Button } from "@heroui/react";
import { Share2, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";

export function ShareMarket({ title }: { title: string }) {
  const shareText = `Check out this prediction market on Boli: ${title}`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} className="text-[#25D366]" />,
      link: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} className="text-[#ee2a7b]" />, // Simplified for icon color
      link: "#",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} className="text-black dark:text-white" />,
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} className="text-[#1877F2]" />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="bg-default-50 dark:bg-default-100 rounded-[40px] p-8 space-y-6">
      <div className="flex items-center gap-2">
        <Share2 className="text-primary" size={24} />
        <h3 className="text-lg font-bold">Share Market</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <Button
            key={social.name}
            as="a"
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="flat"
            className="h-12 rounded-2xl bg-default-100 dark:bg-default-200 text-default-700 dark:text-default-600 font-bold text-xs gap-2 border-none"
            startContent={social.icon}
          >
            {social.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
