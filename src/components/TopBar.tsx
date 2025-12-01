import { User } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="h-16 bg-[#1a1a2e] flex items-center justify-between px-8 shadow-lg">
      <h1 className="text-white text-xl font-bold tracking-wider">
        MDRRMO PIO DURAN MAP DIRECTORY
      </h1>
      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
        <User className="w-6 h-6 text-white" />
      </div>
    </div>
  );
}
