const faqs = [
  {
    question: "What is BTC Flower?",
    answer:
      "BTC Flower is the digital version of the R.I.P Banking System art piece. It exists as an assortment of 2009 unique variations, the original plants that will spawn a garden commemorating accomplishments of the cryptosphere.",
  },
  {
    question: "Who is Ludo?",
    answer:
      "A French artist known for exploring a world where biotechnological chimeras offer to merge plants and animals with our technological universe. In 2018 Ludo unveiled R.I.P Banking System, the first large Bitcoin art that would later become the most iconic street art in crypto history. Using the same theme of BTC blooming from the remnants of a failed fiat system, his generative art collection emerges as BTC Flower. You could learn more about Ludo’s work at thisisludo.com",
  },
  {
    question: "What are the benefits of holding BTC Flower?",
    answer:
      "BTC Flower is a purely artistic expression that expands on the chimera archetype Ludo has dedicated his life to exploring. That said, just as Bitcoin was at the center of the crypto space it gave rise to, BTC Flower will remain at the heart of the garden Ludo plans to create.",
  },
  {
    question: "What is pricing for participation?",
    answer:
      "The floor price for each flower at launch will be 3 ICP for whitelisted members and 5 ICP on the open market. They will each be issued as uniform seeds that grow into a uniquely generated flower decided by the Internet Computer’s randomness. The fee for trading on secondary markets is 5%.",
  },
  {
    question: "What makes a BTC Flower unique?",
    answer:
      "Each flower will have several possible textures (gold, diamond, silver, black, green, white) for several component parts (grave, flower, bitcoin). Graves will have one of nine possible symbols, and each BTC Flower will have its petals alternate in a unique pattern that correlates with recent BTC price. For more details check out our blog.",
  },
  {
    question: "How is rarity determined?",
    answer:
      "Statistical rarity will be used to calculate each Flower’s uniqueness. Simply put, the product of all the probabilities for each trait occurring in a given Flower will yield a rarity score that ranks from #1 to #2009.",
  },
];

export default function Faq() {
  return (
    <div id="faq" className="bg-theme-dark mt-16 rounded-sm">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map((faq, i) => (
              <div key={i}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
