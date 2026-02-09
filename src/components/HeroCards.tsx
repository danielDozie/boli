import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { ArrowRight, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export function HeroCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
      {/* Daily Challenges Card */}
      <Card
        className="md:col-span-2 border-none bg-[#FFD8B5] dark:bg-[#7D5A40] h-[350px] overflow-hidden relative"
        shadow="none"
      >
        <CardBody className="p-10 flex flex-col justify-between z-10">
          <div className="space-y-4 max-w-md">
            <Chip color="default" variant="flat" size="sm" className="bg-white/50 backdrop-blur-md uppercase text-[10px] font-bold">
              Daily Challenges
            </Chip>
            <h1 className="text-5xl font-extrabold text-[#1A1A1A] leading-tight dark:text-white">
              Complete & <br /> Earn Rewards
            </h1>
            <p className="text-[#4A4A4A] dark:text-default-300">
              Unlock exclusive bonuses by completing three <br /> daily prediction tasks.
            </p>
          </div>
          <div>
            <Button
              as={Link}
              href="/markets"
              className="bg-[#1A1A1A] text-white rounded-full px-8 py-6 font-bold"
              endContent={<ArrowRight size={20} />}
            >
              Start Winning
            </Button>
          </div>
        </CardBody>
        
        {/* Background Graphic */}
        <div className="absolute right-[-20px] bottom-[-20px] w-[300px] h-[300px] bg-yellow-400 rounded-full opacity-80 blur-[0px] flex items-center justify-center">
            <span className="text-[180px] font-black text-white/50 select-none">S</span>
        </div>
        <div className="absolute right-[80px] top-[140px] bg-brand-purple p-4 rounded-2xl rotate-12 shadow-2xl z-20">
            <Trophy className="text-white" size={40} />
        </div>
      </Card>

      {/* Spin the Wheel Card */}
      <Card 
        as={Link}
        href="/awoof-hub"
        className="bg-[#13171F] border-none h-[350px] relative overflow-hidden cursor-pointer group" 
        shadow="none"
      >
        <CardBody className="p-8 flex flex-col items-center justify-between z-10">
             <div className="w-full">
                <Chip color="secondary" variant="flat" size="sm" className="bg-primary/20 text-primary uppercase text-[10px] font-bold">
                    Welcome Bonus
                </Chip>
             </div>
             
             <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">
                    Spin the Wheel <br /> & Win Free Spins!
                </h2>
             </div>

             {/* Wheel Placeholder */}
             <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 border-8 border-primary rounded-full border-t-transparent animate-spin-slow"></div>
                <div className="absolute inset-2 border-4 border-secondary/50 rounded-full"></div>
                <span className="text-white font-black rotate-[-45deg] z-20 group-hover:scale-110 transition-transform">SPIN</span>
             </div>

             <Button className="w-full bg-white text-black font-bold py-6 rounded-2xl">
                Spin the Wheel
             </Button>
        </CardBody>
      </Card>
    </div>
  );
}
