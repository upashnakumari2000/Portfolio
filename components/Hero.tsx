import { Sparkles, Palette, Computer } from "lucide-react"

export function Hero() {

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stripes" x="0" y="0" width="80" height="100%" patternUnits="userSpaceOnUse">
              <rect x="0" width="40" height="100%" fill="#D4E5F3" />
              <rect x="40" width="40" height="100%" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="text-center py-16 relative">
          <div className="absolute top-10 left-10 animate-spin" style={{ animationDuration: '8s' }}>
            <Sparkles className="w-8 h-8 text-[#F0A0B5]" />
          </div>
          <div className="absolute top-20 right-16 animate-spin" style={{ animationDuration: '9s' }}>
            <div className="bg-[#F0A0B5] rounded-lg p-2 shadow-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-10 left-20 -rotate-12 animate-pulse">
            <div className="bg-[#D7DE8C] rounded-full p-5 shadow-lg">
              <Computer className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDuration: '5s' }}>
            <div className="bg-[#97A53E] rounded-lg px-4 py-2 text-white text-xs rotate-6 shadow-lg">
              ✨ coding ✨
            </div>
          </div>

          <div className="max-w-xl mx-auto p-8 bg-purple-50 shadow-lg rounded-xl border border-purple-200">
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
              <span className="block text-[#F0A0B5]">building</span>
              <span className="block text-[#97A53E]">impactful software</span>
              <span className="block text-[#F0A0B5]">+ clean code for</span>
              <span className="block text-gray-700">makers, creators,</span>
              <span className="block text-[#D7DE8C]">& problem-solvers</span>
            </h1>
          </div>

          <div className="max-w-xs mx-auto mt-12 bg-[#FFF9B1] shadow-lg 
                border border-yellow-200 rounded-sm 
                -rotate-2 relative p-6">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                  w-16 h-6 bg-red-300/70 backdrop-blur-[1px] -rotate-3deg] 
                  shadow-sm rounded-sm" />
            <p className="text-gray-700 leading-relaxed text-sm">
              your next hire is<br />
              totally in reach, you just<br />
              need a sprinkle of<br />
              <span className="text-[#F0A0B5] font-medium">me</span>
            </p>
          </div>
        </div>
      </div>
    </section>

  );
}
