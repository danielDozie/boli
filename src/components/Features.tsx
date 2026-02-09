import { Button, Card, CardBody, Chip, AvatarGroup, Avatar, Link } from "@heroui/react";
import { ArrowRight, Dice5, Zap } from "lucide-react";

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
      {/* Live Games */}
      <Card 
        as={Link}
        href="/markets"
        className="bg-[#C1B2FA] border-none h-[280px] cursor-pointer hover:shadow-lg transition-all" 
        shadow="none"
      >
        <CardBody className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <Chip size="sm" className="bg-white/30 uppercase text-[10px] font-bold">Live</Chip>
            <h3 className="text-3xl font-bold text-black leading-tight">
              Live Games with <br /> Real Dealers
            </h3>
          </div>
          <div className="flex justify-between items-end">
            <div className="bg-white/30 p-4 rounded-2xl">
                <Dice5 size={40} className="text-white fill-white/50" />
            </div>
            <Button isIconOnly className="bg-white rounded-full h-12 w-12" size="lg">
                <ArrowRight className="text-black" />
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* 3D Games */}
      <Card 
        as={Link}
        href="/awoof-hub"
        className="bg-[#13171F] border-none h-[280px] cursor-pointer hover:shadow-lg transition-all" 
        shadow="none"
      >
        <CardBody className="p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <Chip size="sm" color="primary" variant="flat" className="bg-primary/20 text-primary uppercase text-[10px] font-bold">3D Games</Chip>
            <h3 className="text-3xl font-bold text-white leading-tight">
              Punt Original <br /> 3D Games
            </h3>
            <p className="text-default-400 text-sm">Earn for free every day!</p>
          </div>
          <div className="flex items-center gap-3">
             <AvatarGroup isBordered size="sm" max={3}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
             </AvatarGroup>
             <span className="text-xs text-default-500 font-semibold">+1.2k Playing Now</span>
          </div>
        </CardBody>
      </Card>

      {/* Become a Winner */}
      <Card 
        as={Link}
        href="/awoof-hub"
        className="bg-white dark:bg-default-50 border-none h-[280px] cursor-pointer hover:shadow-lg transition-all" 
        shadow="none"
      >
        <CardBody className="p-8 flex flex-col justify-between items-center text-center">
          <div className="space-y-4 w-full text-left">
            <Chip size="sm" className="bg-default-100 uppercase text-[10px] font-bold">Winners</Chip>
            <h3 className="text-2xl font-bold text-black dark:text-white leading-tight">
              Become a <br /> True Winner
            </h3>
            <p className="text-default-500 text-xs">Our players have already claimed their big wins - now it's your turn!</p>
          </div>
          <Button color="primary" className="w-full font-bold py-6 rounded-2xl" startContent={<Zap size={16} className="fill-white" />}>
            Join Community
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
