import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image src="/i-space-logo.png" alt="i-space" width="80" height="80" />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">iSpace</p>
        <p className="text-sm text-muted-foreground">🚀Space Jam Time!🚀</p>
      </div>
    </div>
    
  );
};

export default Logo;
