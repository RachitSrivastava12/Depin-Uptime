import Image from "next/image";
import { Button } from "@/components/ui/button";
import RootLayout from "./layout";




export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
  <div className="flex justify-center">
    <Button>Sign up</Button>
  </div>
</div>

      
  );
}
