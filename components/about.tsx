export default function About() {
  return (
    <div id="about" className="mt-16 relative bg-theme-fg rounded-sm">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="w-full object-top"
            src="/img/home/btcorigin_street_1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              The Story
            </h3>
            <p className="mt-8">
              In early 2018, BTC Flower made its debut on the streets of Paris.
              An unusual kind of Ludo piece, sharing the same techno-flower
              chimera archetype, but with a different tone and style. R.I.P
              Banking System was an uplifting symbol framed with an elegantly
              simple message. There’s not a forced entanglement, but a genuine
              symbiosis of the natural and technical. Greenery keeps its
              original plant form with Bitcoin at its core, able to bloom from
              the remains of a failed Fiat system.{" "}
              <a
                href="https://twitter.com/btcflower/status/1449383480853291010?s=20"
                target="_blank"
                className="underline"
              >
                A seed
              </a>{" "}
              had been planted, if you will.
            </p>
            <p className="mt-8">
              This story cuts closer to the ideals of crypto than most realize.
              BTC Flower started as a street piece, the{" "}
              <a
                href="https://streetartnews.net/2018/02/r-p-banking-system-ludo-paris.html"
                target="_blank"
                className="underline"
              >
                first
              </a>{" "}
              large Bitcoin art the world has ever known. Egalitarian in nature,
              it has no owner and is free for everyone — Ludo’s gift to the
              world. This was only the beginning. Ludo went on to stay involved
              in the space throughout crypto winter. He created and privately
              sold physical versions of BTC Flower in March 2020, remaining a
              symbol of hope in the market’s darkest days.
            </p>
            <p className="mt-8">
              The next iteration of <em>R.I.P Banking System</em> is coming in
              the form of 2,009 digital NFTs, commemorating the year of
              Bitcoin’s genesis. They will exist natively on the Internet
              Computer, the only global blockchain with Bitcoin
              interoperability. The art itself will be a true chimera, a single
              piece of art in iterable and varied forms, distributed as a
              network species. BTC Flower’s move from physical to digital isn’t
              a happenstance scenario nor an opportunistic NFT play, but an
              utter necessity in reaching levels of creativity and equity that
              should be representative of anything in crypto.
            </p>
            <p className="mt-8">
              The BTC Flower is more than just an artistic representation or
              symbol for the Bitcoin movement — it’s a distillation of Bitcoin’s
              story that reminds us where we’ve been, where we’re going, and
              most importantly, why we Bitcoiners do what we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
