import React from "react";
import { FaDiscord, FaMedium, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 flex items-center justify-center gap-8 transition-opacity text-white">
      <a
        href="https://twitter.com/btcflower"
        className="opacity-50 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size="32" />
      </a>
      <a
        href="https://discord.gg/GGEFTC9PzH"
        className="opacity-50 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord size="32" />
      </a>
      <a
        href="https://btcflower.medium.com/"
        className="opacity-50 hover:opacity-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium size="32" />
      </a>
    </footer>
  );
}
