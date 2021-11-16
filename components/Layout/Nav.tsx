import dynamic from "next/dynamic";
import React from "react";
import IdentifierLabelWithButtons from "../Buttons/IdentifierLabelWithButtons";
import { useGlobalContext } from "../Store/Store";

const LoginButton = dynamic(() => import("../Buttons/LoginButton"), {
  ssr: false,
});

const navigation = [
  { name: "About", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export default function Nav() {
  const {
    state: { principal },
  } = useGlobalContext();

  return (
    <div className="bg-theme-bg pt-6">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-auto">
            <a href="#">
              <span className="sr-only">BTC Flower</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/nav/logobtcflowerhome_128.gif"
                alt="BTC Flower"
              />
            </a>
          </div>
          <div className="space-x-8 flex ml-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-4">
            {principal && !principal.isAnonymous() && (
              <div className="flex flex-col">
                <IdentifierLabelWithButtons
                  className="text-white"
                  type="Principal"
                  id={principal}
                  isShort={true}
                />
              </div>
            )}
            <LoginButton />
          </div>
        </div>
      </nav>
    </div>
  );
}
