import About from "../components/about";
import Faq from "../components/faq";
import Mint from "../components/mint";

export default function Home() {
  return (
    <>
      <div className="mt-16 w-full max-w-screen-xs mx-auto relative">
        <img src="/img/hero/flower.png" />
        <img className="absolute inset-0" src="/img/hero/petals.svg" />
      </div>
      <div>
        <div className="-mt-48 flex flex-col items-center gap-8">
          <div className="px-10 py-8 bg-theme-fg rounded-sm uppercase text-7xl font-serif italic">
            BTC Flower
          </div>

          <div className="px-4 py-4 bg-theme-fg rounded-sm">
            2009 unique NFTs by Paris-based street artist Ludo on the Internet
            Computer.
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        <img src="/img/home/flower1test.jpg" />
        <img src="/img/home/flower2test.jpg" />
        <img src="/img/home/flower3test.jpg" />
        <img src="/img/home/flower4test.jpg" />
      </div>

      <Mint />

      <About />

      <Faq />
    </>
  );
}
