import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import AppHome from './app/home'
export default function Home() {
  return (
   <main>
    <AppHome/>
   </main>
  );
}
