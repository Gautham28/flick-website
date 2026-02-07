import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-6 py-8 md:px-12 md:py-10 max-w-[1600px] mx-auto text-black">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8 md:mb-12">
        <div className="relative w-24 h-12 md:w-32 md:h-14">
          <Image
            src="/flick-logo.png"
            alt="Flick Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <button className="font-chopsticks text-lg md:text-xl border-2 border-black rounded-full px-6 py-2 hover:bg-black/5 transition-colors uppercase pt-3 cursor-pointer">
          Download Now
        </button>
      </nav>

      {/* Main Content Grid */}
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full">
        
        {/* Left Card*/}
        <div className="bg-flick-white rounded-[2rem] border-2 border-black p-8 md:p-16 flex flex-col justify-center items-center text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          
          {/* HEADLINE  */}
          <h1 className="font-chopsticks text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 uppercase">
            Stop scrolling,<br />
            start cleaning
          </h1>

          {/* SUB-TEXT */}
          <div className="font-martian text-sm md:text-base space-y-4 max-w-md mx-auto mb-10 leading-relaxed">
            <p>The fastest way to declutter your gallery.</p>
            <p>
              <span className="font-bold">Swipe right</span> to keep your memories,
            </p>
            <p>
              <span className="font-bold">Swipe left</span> to delete the rest.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            {/* CTA BUTTON */}
            <button className="font-chopsticks bg-flick-lime border-2 border-black text-xl md:text-2xl px-10 py-3 rounded-full hover:scale-105 transition-transform uppercase pt-4 cursor-pointer">
              Download Now
            </button>
            
            {/* ANDROID NOTE  */}
            <span className="font-martian text-red-600 text-xs md:text-sm tracking-wide mt-2">
              [only for android]
            </span>
          </div>
        </div>

        {/* Right Card  */}
        <div className="bg-flick-lime rounded-[2rem] border-2 border-black relative overflow-hidden min-h-[500px] lg:min-h-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center">
            <Image
              src="/flick-hero-image.png"
              alt="Flick App Screens"
              fill
              className="object-contain p-8 md:p-12"
              priority
            />
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="font-chopsticks text-center uppercase py-8 text-lg md:text-xl mt-4">
        created BY Gautham
      </footer>
    </div>
  );
}