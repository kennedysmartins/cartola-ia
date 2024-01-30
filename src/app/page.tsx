import Navbar from "@/components/Navbar"
import { HeroEffect } from "@/components/hero-effect"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full text-2xl gap-2 -mt-20">
        <HeroEffect />
      </main>
    </>
  )
}
