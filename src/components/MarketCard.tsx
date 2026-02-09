import { Card, CardBody, Button, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export interface MarketCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  status: "active" | "expiring" | "closed";
  options: { label: string; value?: string }[];
  date?: string;
  category?: string;
}

export function MarketCard({ id, title, icon, status, options, date }: MarketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card 
        as={Link}
        href={`/markets/${id}`}
        className="bg-white dark:bg-default-50 border-none p-2 h-full cursor-pointer hover:shadow-lg transition-shadow" 
        shadow="none"
      >
        <CardBody className="space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-default-100 dark:bg-default-200 rounded-xl">
                {icon}
              </div>
              <Chip
                size="sm"
                variant="flat"
                color={status === "active" ? "primary" : status === "expiring" ? "warning" : "default"}
                className={cn(
                  "uppercase text-[10px] font-bold",
                  status === "active" ? "text-primary" : status === "expiring" ? "text-warning-600 dark:text-warning" : ""
                )}
              >
                {status}
              </Chip>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-black dark:text-white leading-tight">{title}</h4>
              {date && <p className="text-xs text-default-400 font-medium">{date}</p>}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {options.map((opt, i) => (
              <Button
                key={i}
                variant="flat"
                color={opt.label === "Yes" ? "success" : opt.label === "No" ? "danger" : "default"}
                className={cn(
                  "flex-1 h-10 rounded-xl text-xs font-bold transition-all",
                  opt.label === "Yes" ? "text-success" : opt.label === "No" ? "text-danger" : ""
                )}
              >
                {opt.label} {opt.value && <span className="ml-1 font-black">{opt.value}</span>}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
