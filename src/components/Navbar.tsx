import React, { useState, useEffect } from "react";

function NavItem({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <div className="justify-center py-2 cursor-pointer" onClick={onClick}>
      {text}
    </div>
  );
}

function HarmonyNav() {
  const [navItems, setNavItems] = useState([
    { text: "Experience", onClick: () => alert("Navigate to Experience") },
    { text: "Testimonials", onClick: () => alert("Navigate to Testimonials") },
    { text: "Pricing", onClick: () => alert("Navigate to Pricing") },
    { text: "FAQ", onClick: () => alert("Navigate to FAQ") },
  ]);

  useEffect(() => {
    // Fetch navigation items from backend
    async function fetchNavItems() {
      try {
        const response = await fetch("/api/navItems");
        const data = await response.json();
        setNavItems(
          data.map((item: any) => ({
            ...item,
            onClick: () => alert(`Navigate to ${item.text}`),
          })),
        );
      } catch (error) {
        console.error("Failed to fetch navigation items", error);
      }
    }

    fetchNavItems();
  }, []);

  return (
    <div className="sticky top-0 z-10 flex gap-5 justify-between items-center py-1.5 px-6 rounded-2xl backdrop-blur-[100.5px] bg-opacity-10 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 ">
      <div className="flex gap-2 justify-between items-center py-1.5 my-auto w-full sm:w-auto">
        <div className="flex justify-center items-center px-0.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96ed444f12f2297ccd4006841bd1831940e6f23d36396492d16831d2cdf15c29?apiKey=5b7d47d822c447fbbf3f0faf7f51790e&"
            className="aspect-[1.14] w-[41px]"
            alt="Logo"
          />
        </div>
        <div className="my-auto uppercase font-extrabold text-lg text-zinc-950">
          Harmony
        </div>
      </div>
      <nav className="flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto">
        {navItems.map((item, index) => (
          <NavItem key={index} text={item.text} onClick={item.onClick} />
        ))}
      </nav>
      <button
        className="justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-neutral-900 max-md:px-5 font-light w-full sm:w-auto"
        onClick={() => alert("Download Now button clicked")}
      >
        Download Now
      </button>
    </div>
  );
}

export default HarmonyNav;
