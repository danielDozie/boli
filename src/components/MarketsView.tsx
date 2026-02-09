import { useState, useMemo, useEffect } from "react";
import { Input, Button, Tabs, Tab, Pagination } from "@heroui/react";
import { Search } from "lucide-react";
import { MarketCard } from "./MarketCard";
import { motion, AnimatePresence } from "framer-motion";
import { nigerianMarkets, categories, getIcon } from "../data/markets";

const ITEMS_PER_PAGE = 20;

export function MarketsView() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);

  const filteredMarkets = useMemo(() => {
    return nigerianMarkets.filter((market) => {
      const matchesSearch = market.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeTab === "all" || market.category === activeTab;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeTab]);

  const totalPages = Math.ceil(filteredMarkets.length / ITEMS_PER_PAGE);

  const paginatedMarkets = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredMarkets.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredMarkets, page]);

  // Reset to first page when search or filters change
  useEffect(() => {
    setPage(1);
  }, [search, activeTab]);

  return (
    <div className="py-12 space-y-10 pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight mb-2">Explore Markets</h1>
          <p className="text-default-500 font-medium">Predict on Nigeria's biggest events</p>
        </div>
        <div className="w-full md:w-96">
          <Input
            classNames={{
              input: "text-sm",
              inputWrapper: "h-14 bg-white dark:bg-default-50 shadow-sm border-none rounded-2xl",
            }}
            placeholder="Search markets..."
            startContent={<Search size={20} className="text-default-400" />}
            value={search}
            onValueChange={setSearch}
          />
        </div>
      </div>

      <Tabs
        aria-label="Market Categories"
        variant="light"
        color="primary"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
        classNames={{
          tabList: "gap-6 p-0",
          cursor: "w-full bg-primary/50",
          tab: "max-w-fit px-4",
          tabContent: "group-data-[selected=true]:text-white font-bold text-default-500",
        }}
      >
        {categories.map((cat) => {
          const Icon = getIcon(cat.icon);
          return (
            <Tab
              key={cat.id}
              title={
                <div className="flex items-center gap-2">
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </div>
              }
            />
          );
        })}
      </Tabs>

      <div className="space-y-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[400px]"
          layout
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {paginatedMarkets.length > 0 ? (
              paginatedMarkets.map((market) => {
                const Icon = getIcon(market.iconName);
                return (
                  <MarketCard 
                    key={market.id} 
                    {...market} 
                    icon={<Icon size={24} className="text-primary" />} 
                  />
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <p className="text-default-400 text-lg">No markets found matching your criteria.</p>
                <Button 
                  variant="light" 
                  color="primary" 
                  className="mt-4 font-bold"
                  onPress={() => { setSearch(""); setActiveTab("all"); }}
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center pt-8">
            <Pagination
              showControls
              total={totalPages}
              initialPage={1}
              page={page}
              onChange={setPage}
              color="primary"
              variant="flat"
              classNames={{
                wrapper: "gap-2",
                item: "w-10 h-10 text-sm font-bold bg-white dark:bg-default-50 border-none rounded-xl shadow-sm",
                cursor: "bg-primary text-white rounded-xl shadow-md",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
