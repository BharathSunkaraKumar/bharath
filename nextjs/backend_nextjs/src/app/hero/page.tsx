import { GridBeam, Beam } from "@/components/GridBeam "

const Hero = () => (
  <div className="w-full h-[400px] dark:bg-grid-white/[0.05] bg-grid-black/[0.07]">
    <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start">
      <div className="grid gap-2">
        <h1 className="sm:text-5xl text-4xl font-bold max-w-sm">Hero Section That Converts.</h1>
        <p className="text-neutral-500 max-w-lg">
          Beautiful beam which I btw reverse engineered from Aceternity
        </p>
      </div>
    </GridBeam>
  </div>
)

export default Hero;