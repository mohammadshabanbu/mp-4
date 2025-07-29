"use client";

import Link from "next/link";


const rarities = ["Common", "Rare", "Epic", "Legendary", "Champion"];

export default function Home() {

  return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Choose Card Rarity</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {rarities.map((rarity) => (
              <Link
                  key={rarity}
                  href={`/cards/${rarity}`}
                  className="bg-blue-600 hover:bg-red-400 text-white font-medium rounded-lg px-4 py-6 text-center text-xl "
              >
                {rarity}
              </Link>
          ))}
        </div>
      </main>
  );
}